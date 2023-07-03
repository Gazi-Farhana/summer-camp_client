import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
    const courseId = useParams();
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const {  data: cart } = useQuery({
        queryKey: ["taken-courses/single", user?.email],
        enabled: !loading,
        queryFn: async () => {
          const res = await axiosSecure(
            `/cart/${courseId.id}?email=${user?.email}`
          );
          return res.data;
        },
      });
    
    
      const price = cart?.price


    return (
        <div>
            <Elements stripe={stripePromise}>
          <CheckoutForm
          cart={cart}
            price={price}
          ></CheckoutForm>
        </Elements>
        </div>
    );
};

export default Payment;