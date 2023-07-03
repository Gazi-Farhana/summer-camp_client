import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const SocialSignIn = () => {
  const { googleSignIn } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    setError(null);
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        };

        axios.post("https://b7a12-summer-camp-server-side-gazi-farhana.vercel.app/users", userInfo).then((res) => {
          console.log(res.data);

          Swal.fire(
            "Registration successfull!",
            `${user?.email} is now a user`,
            "success"
          );
          navigate("/");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="form-control mt-6">
        <button onClick={handleGoogleSignin} className="btn btn-info">
          <FaGoogle />
          Google
        </button>
      </div>
      <div className="text-center">
        {error && <span className="text-red-600 pb-4">{error}</span>}
      </div>
    </>
  );
};

export default SocialSignIn;
