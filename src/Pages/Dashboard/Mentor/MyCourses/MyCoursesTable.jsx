import { Link } from "react-router-dom";

const MyCoursesTable = ({ course, index }) => {
  const { course_img, course_title, price, status, available_seats, _id, } = course;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={course_img} />
          </div>
        </div>
      </td>
      <td>{course_title}</td>
      <td>{available_seats}</td>
      <td>{price}</td>
      <td>{status}</td>
      <td>{course?.feedback}</td>
      <td>
        <div>
          <Link to={`${_id}`} className="btn btn-xs btn-accent">Edit</Link>
        </div>
      </td>
    </tr>
  );
};

export default MyCoursesTable;
