import { useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";
import SectionTitle from "../../Components/SocialSignIn/SectionTitle";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="py-12">
      <SectionTitle title="Our offered classes" subtitle="Welcome to the world-class courses from melody haven"/>
      <div className="flex flex-wrap gap-10 justify-center">
        {courses.map((course) => (
          <CoursesCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
