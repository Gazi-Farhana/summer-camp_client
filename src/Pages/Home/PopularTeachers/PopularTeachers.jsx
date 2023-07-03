import { useLoaderData } from "react-router-dom";
import PopularTeacherCard from "./PopularTeacherCard";
import SectionTitle from "../../../Components/SocialSignIn/SectionTitle";

const PopularTeachers = () => {
  const mentors = useLoaderData();

  return (
    <div className="py-20">
      <SectionTitle title="Musical GURUs" subtitle="Legends of the their on kingdoms"/>
      <div className="flex flex-wrap gap-10 justify-center">
        {mentors.map((mentor) => (
          <PopularTeacherCard
            key={mentor._id}
            mentor={mentor}
          ></PopularTeacherCard>
        ))}
      </div>
    </div>
  );
};

export default PopularTeachers;
