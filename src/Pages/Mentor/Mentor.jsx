import { useLoaderData } from "react-router-dom";
import MentorCard from "./MentorCard";
import SectionTitle from "../../Components/SocialSignIn/SectionTitle";

const Mentor = () => {
  const mentors = useLoaderData();

  return (
    <div className="py-12">
      <SectionTitle title="Our Legendary Mentors" subtitle="You will find no match of them"/>
    <div className="flex flex-wrap gap-10 justify-center">
      {mentors.map((mentor) => (
        <MentorCard key={mentor._id} mentor={mentor} />
        ))}
    </div>
        </div>
  );
};

export default Mentor;
