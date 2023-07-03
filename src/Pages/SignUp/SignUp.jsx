import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { BsFillEyeFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialSignIn from "../../Components/SocialSignin/SocialSignin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const passwordRef = useRef("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    const password = passwordRef.current.value;

    console.log(data, password);
    if (password !== data.confirm) {
      return setError("Error: password and confirm password must match!!!");
    }

    const email = data.email;
    const displayName = data.name;
    const photoURL = data.photo;

    const userInfo = {
      email: email,
      name: displayName,
      image: photoURL,
    };
    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;

        updateUserProfile({ displayName, photoURL })
          .then()
          .catch((error) => setError(error.message));

        axios.post("https://b7a12-summer-camp-server-side-gazi-farhana.vercel.app/users", userInfo).then((res) => {
          console.log(res.data);

          Swal.fire(
            "Registration successfull!",
            `${currentUser?.email} is now a user`,
            "success"
          );
          reset();
          navigate("/");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              <label className="label">
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("photo", { required: true })}
                type="text"
                placeholder="photo url"
                className="input input-bordered"
              />
              <label className="label">
                {errors.photo && (
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                {...register("confirm", { required: true })}
                type="password"
                required
                placeholder="confirm password"
                className="input input-bordered rounded-none"
              />
              <label className="label">
                {errors.confirm?.type === "required" && (
                  <span className="text-red-600">This filed is required</span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                already have an account?
              </Link>
            </label>
          </form>
          <div>social</div>
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

export default SignUp;
