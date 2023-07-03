/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, price }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const stripe = useStripe();
  const [axiosSecure] = useAxiosSecure();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post(`/payment-intent?email=${user?.email}`, { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, axiosSecure, user?.email]);

  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    console.log(paymentIntent);
    if (paymentIntent.status == "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        cartId: cart?._id,
        user: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        price: cart?.price,
        date: new Date(),
        courseId: cart?.courseId,
        image: cart?.course_img,
        name: cart?.course_title,
        notification: "Pending",
      };
      console.log(payment);
      axiosSecure.post("/payments", payment).then((res) => {
        console.log("post");
        if (res.data.insertResult.acknowledged) {
          console.log("successful post");
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Payment successfully!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/myEnrolledClasses");
        }
      });
    }
  };

  console.log(stripe,clientSecret, processing)

  return (
    <div className="">
      <form className="w-full block" onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Confirm Payment
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Your transactionId number is {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
