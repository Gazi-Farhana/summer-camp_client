import React from "react";
import { Flip, Roll, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Roll className="text-5xl font-bold">About Us</Roll>
            <p className="py-6">
              Welcome to Melody Haven Summer School, the premier destination for
              music education in the heart of New York City. At Melody Haven, we
              believe in the transformative power of music and strive to provide
              an enriching and immersive experience for students of all ages and
              skill levels.
              <br />
              <br />
              <br />
              Our school is dedicated to nurturing a lifelong love and
              appreciation for music while fostering creativity,
              self-expression, and personal growth. Whether you're a budding
              musician taking your first steps or an experienced player looking
              to refine your skills, we have a wide range of programs and
              courses tailored to meet your needs.
              <br />
              <br />
              At Melody Haven, we boast a team of highly skilled and passionate
              instructors who are accomplished musicians themselves. Our faculty
              consists of industry professionals, renowned performers, and
              dedicated educators who are committed to providing exceptional
              instruction and guidance. They create a supportive and encouraging
              environment that allows students to flourish and reach their full
              potential.
            </p>
            <Link to="/login" className="btn btn-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
