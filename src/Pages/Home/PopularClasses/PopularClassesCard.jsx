const PopularClassesCard = ({ course }) => {
  const {
    course_title,
    course_img,
    mentor_name,
    price,
    enrolled,
  } = course;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl lg:w-96">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={course_img} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{course_title}</h2>
          <p>{mentor_name}</p>
          <p>Total students: {enrolled}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
