import React from "react";
import me from "../assets/images/me.png";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center w-full pl-0  items-center lg:pl-56 h-full">
        <div className="max-w-[1000px]  w-full grid grid-cols-2 lg:block lg:max-w-none   gap-8">
          <div className="text-right lg:text-left pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] lg:max-w-none w-full lg:block grid grid-cols-2 gap-8  px-4">
          <div className="text-right lg:text-left text-4xl font-bold">
            <p>
              Hi. I'm Nguyen Van Dong, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am a student studying website design at FPT Polytechnic,
              passionate about learning new technologies and able to work well
              in a team.
            </p>
          </div>
        </div>
      </div>
      <div className="text-white w-full  hidden lg:flex items-center justify-center">
        <img src={me} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default About;
