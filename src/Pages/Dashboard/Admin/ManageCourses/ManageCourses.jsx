import SectionTitle from "../../../../Components/SocialSignIn/SectionTitle";
import useCourses from "../../../../hooks/useCourses";
import ManageCourseTable from "./ManageCourseTable";

const ManageCourses = () => {
  const { courses, refetch } = useCourses();

  return (
    <div>
      <SectionTitle title="Manage Users"/>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>course</th>
            <th>Mentor</th>
            <th>Favorite Color</th>
            <th>Approved</th>
            <th>Denied</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <ManageCourseTable key={course._id} course={course} index={index} refetch={refetch}/>
            ))}
        </tbody>
      </table>
    </div>
            </div>
  );
};

export default ManageCourses;
