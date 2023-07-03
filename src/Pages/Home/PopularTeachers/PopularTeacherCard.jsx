const PopularTeacherCard = ({ mentor }) => {
  const {
    course_title,
    course_img,
    mentor_name,
    mentor_img,
    available_seats,
    price,
    enrolled,
    status,
  } = mentor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="avatar">
        <div className=" rounded">
          <img src={mentor_img} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {mentor_name}
          <div className="badge badge-info p-4">Top</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            {enrolled} <sup>+</sup> active students{" "}
          </div>
          <div className="badge badge-outline">only {available_seats} remaining</div>
        </div>
      </div>
    </div>
  );
};

export default PopularTeacherCard;
