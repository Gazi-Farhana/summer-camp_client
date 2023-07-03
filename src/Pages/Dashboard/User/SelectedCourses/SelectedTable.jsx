import { Link } from "react-router-dom";

const SelectedTable = ({ course, serial }) => {

  const { course_img, course_title, mentor_name, price, enrolled, _id } = course;
  return (
    <tr>
      <th>{serial + 1}</th>
      <th>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={course_img} />
          </div>
        </div>
      </th>
      <td>{course_title}</td>
      <td>{mentor_name}</td>
      <td>{price}</td>
      <td>{enrolled}</td>
      <td>
        <div>
            <Link to={`${_id}`} className="btn btn-info normal-case btn-xs">Pay</Link>
        </div>
      </td>
    </tr>
  );
};

export default SelectedTable;
