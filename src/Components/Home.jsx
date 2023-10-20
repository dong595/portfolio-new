import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Nguyen Van Dong
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Enthusiastic focused, highly motivated Intern Frontend Developer with
          experience in building and maintaining web applications. Eager to
          apply my experience with ReactJS to create high-quality software
          products that contribute to the success of the company. I enjoy
          working collaboratively with team and willingness to learn new
          technologies. Seeking a dynamic and professional working environment.{" "}
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="flex items-center group gap-2 border-2 my-2 hover:bg-pink-600 hover:border-pink-600 rounded text-white  py-3 px-6">
              View work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="">
        <img src={me} alt="" />
      </div> */}
    </div>
  );
};

export default Home;
