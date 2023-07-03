import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularTeachers from "../PopularTeachers/PopularTeachers";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <PopularClasses />
      <PopularTeachers></PopularTeachers>
      <Gallery></Gallery>
      <ContactUs/>
    </div>
  );
};

export default Home;
