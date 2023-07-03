/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useMentor from '../../hooks/useMentor'

const CoursesCard = ({ course }) => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isMentor] = useMentor();


  const {
    course_title,
    course_img,
    mentor_name,
    available_seats,
    price,
    enrolled,
  } = course;

  const handleAddToCart = async (course) => {
    if (user && user?.email) {
      const courseData = {
        courseId: course._id,
        price: course.price,
        enrolled: "not-yet",
        email: user?.email,
        course_title: course.course_title,
        course_img: course.course_img,
        mentor_name: course.mentor_name,
        userName: user?.displayName,
      };
      fetch("https://b7a12-summer-camp-server-side-gazi-farhana.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "The course is added to your course list",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-lg">
      <div className="avatar">
        <div className="w-44 rounded">
          <img src={course_img} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{course_title}</h2>
        <p>Mentor: {mentor_name}</p>
        <p>Available seats: {available_seats}</p>
        <p>Total students: {enrolled}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
        {isAdmin || isMentor ? (
            <button className="btn btn-error" disabled>
              Enroll
            </button>
          ) : (
            <>
              {user && user?.email && available_seats >0 ? (
                <button
                  className="btn btn-info"
                  onClick={() => handleAddToCart(course)}
                >
                  Enroll
                </button>
              ) : (
                <button className="btn btn-primary" disabled>
                  Enroll
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
