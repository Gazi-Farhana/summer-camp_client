import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../../public/assets/images/class_1.webp";
import img2 from "../../../../public/assets/images/class_2.webp";
import img3 from "../../../../public/assets/images/class_3.jpg";
import img4 from "../../../../public/assets/images/class_4.jpg";
import { Fade, Hinge, Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Carousel>
      <div className="relative">
        <img className="bg-gradient-to-r from-black-100" src={img1} />
        <div className="lg:text-5xl text-2xl -mt-96 font-bold text-base-100 absolute">
          <h3>
            <Slide>Welcome to Melody Haven summer school</Slide>
            <br />
            Unleash your musical potential by joining <br /> our violin class
            for a summer of enchanting melodies and harmonious learning.
          </h3>
          <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Apply Now
          </button>
        </div>
      </div>
      <div>
        <img src={img2} />
        <div className="lg:text-5xl text-2xl -mt-96 font-bold text-base-100">
          <h3>
              Ignite your passion for music by experiencencing <br /> the magic
              of the piano in our summer class, where melodies come alive.
          </h3>
          <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Apply Now
          </button>
        </div>
      </div>
      <div>
        <img src={img4} />
        <div className="lg:text-5xl text-2xl -mt-96 font-bold text-base-100">
          <h3>
            Discover the enchanting world of the flute by joining <br /> our
            summer class and let your melodies soar with this beautiful
            instrument.
          </h3>
          <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Apply Now
          </button>
        </div>
      </div>
      <div>
        <img src={img3} />
        <div className="lg:text-5xl text-2xl -mt-96 font-bold text-base-100">
          <h3>
            Strum your way to musical greatness by joining <br /> our guitar
            class this summer and unleash your inner rockstar with style.
          </h3>
          <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Apply Now
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
