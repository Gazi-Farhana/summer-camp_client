import SectionTitle from "../../../../Components/SocialSignIn/SectionTitle";
import useMentorClass from "../../../../hooks/useMentorClass";
import MyCoursesTable from "./MyCoursesTable";

const MyCourses = () => {
  const { courses } = useMentorClass();

  return (
    <div>
      <SectionTitle title="My Courses"/>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Course Image</th>
              <th>Course Name</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <MyCoursesTable index={index} key={course._id} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
