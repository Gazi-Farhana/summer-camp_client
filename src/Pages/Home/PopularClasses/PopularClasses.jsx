import { useLoaderData } from "react-router-dom";
import PopularClassesCard from "./PopularClassesCard";
import SectionTitle from "../../../Components/SocialSignIn/SectionTitle";


const PopularClasses = () => {
    const courses = useLoaderData()

    return (

        <>
        <SectionTitle title="Most picked courses by our users" subtitle="Enrich yourself with our musical journey"></SectionTitle>
        <div className="flex flex-wrap gap-10 justify-center">
            {courses.map(course=><PopularClassesCard key={course._id} course={course}></PopularClassesCard>)}
        </div>
        </>
    );
};

export default PopularClasses;