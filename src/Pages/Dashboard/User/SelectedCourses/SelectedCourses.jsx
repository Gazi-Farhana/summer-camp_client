import SectionTitle from "../../../../Components/SocialSignIn/SectionTitle";
import useCard from "../../../../hooks/useCart";
import SelectedTable from "./SelectedTable";

const SelectedCourses = () => {
  const { cart, refetch } = useCard();

  return (
    <div>
      <SectionTitle title="Selected Courses"/>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Course image</th>
              <th>Course name</th>
              <th>Mentor</th>
              <th>Price</th>
              <th>Enroll status</th>
              <th>Payment proceed</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <SelectedTable key={item._id} course={item} serial={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedCourses;
