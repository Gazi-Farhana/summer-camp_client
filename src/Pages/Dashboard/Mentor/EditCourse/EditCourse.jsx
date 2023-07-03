import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import SectionTitle from "../../../../Components/SocialSignIn/SectionTitle";

const img_hosting_token = import.meta.env.VITE_img_hosting;

const EditCourse = () => {

  const id = useParams();
  console.log(id)
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios
      .post(`https://api.imgbb.com/1/upload?key=${img_hosting_token}`, formData)
      .then((imgResponse) => {
        if (imgResponse.data.success) {
          const imgURL = imgResponse.data.data.url;
          const newItem = {
            _id:id,
            course_title: data.course_title,
            course_img: imgURL,
            mentor_email: user.email,
            available_seats: parseFloat(data.available_seats),
            price: parseFloat(data.price),
          };
          axiosSecure.put(`/courses/my-course`, newItem).then((data) => {
            if (data.data.modifiedCount) {
                console.log('success')
              reset();
              navigate("/dashboard/my-courses");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your course is updated",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <SectionTitle title="Edit"/>
      <div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
     
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Title</span>
            </label>
            <input
              {...register("course_title", { required: true })}
              name="course_title"
              type="text"
              placeholder="course title"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              {...register("available_seats", { required: true })}
              name="available_seats"
              type="text"
              placeholder="seats"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              name="price"
              type="text"
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Thumbnail</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
