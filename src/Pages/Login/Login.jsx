import { useRef, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialSignIn from "../../Components/SocialSignin/SocialSignin";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const passwordRef = useRef("");
  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    const password = passwordRef.current.value;
    console.log(data, password);
    signIn(data.email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire(
          "Logged in!",
          `Welcome to the melody haven, ${user?.displayName}!`,
          "success"
        );
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePasswordVisible = () => {
    const passwordField = passwordRef.current;
    if (showPassword) {
      setShowPassword(false);
      passwordField.setAttribute("type", "text");
    } else {
      setShowPassword(true);
      passwordField.setAttribute("type", "password");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-20">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              <label className="label">
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </label>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  minLength: 6,
                  maxLength: 30,
                })}
                ref={passwordRef}
                type="password"
                required
                placeholder="password"
                className="input input-bordered rounded-none"
              />
              <button
                onClick={handlePasswordVisible}
                className="btn btn-ghost w-10 btn-xs absolute bottom-8 right-2"
              >
                <BsFillEyeFill className="text-3xl text-gray-900" />
              </button>
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-600">This filed is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 30 characters
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                New to Melody haven?
              </Link>
            </label>
          </form>
          <div>
            <SocialSignIn />
          </div>
          <div className="text-center">
            {error && <span className="text-red-600 pb-4">{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
