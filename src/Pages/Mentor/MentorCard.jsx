const MentorCard = ({ mentor }) => {
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
        <div className="w-96 rounded-xl">
          <img src={mentor_img} />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{mentor_name}</h2>
        <p>
          <span className="font-semibold">Active class:</span> {course_title}
        </p>
        <p>
          <span className="font-semibold">Total students:</span> {enrolled}
        </p>
        <p>
          <span className="font-semibold">Available seats:</span> {enrolled}
        </p>
      </div>
    </div>
  );
};

export default MentorCard;
