import React from "react";
import UIUX from "../../assets/image/UIUX.png";
import Frontend from "../../assets/image/Frontend.png";
import Backend from "../../assets/image/Backend.png";

const Education = () => {
  const education = [
    {
      year: 2022,
      title: "UI/UX Design",
      institution: "Design Institute",
      image: UIUX,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      year: 2023,
      title: "Frontend With React",
      institution: "Frontend Institute",
      image: Backend,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      year: 2024,
      title: "Backend with Java/Springboot",
      institution: "Springboot Institute",
      image: Frontend,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",   
       },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center ">
          <div>
            <div className="uppercase text-3xl text-white font-semibold">
              education
            </div>
            <div className="flex items-center justify-start gap-3 w-48">
              <div className="h-[2px] w-[50%] bg-white"></div>
              <div className="uppercase text-sky-500 text-sm font-semibold ">
                Learning
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full items-center justify-center">
          {education.map((item, index) => (
            <div
              key={index}
              className={`relative  flex ${index % 2 === 0?"justify-end":"justify-start"} w-[50%] text-white bg-gray-700  bg-opacity-20 rounded-lg`}
            >
              <div className={ index % 2 === 0?"absolute left-0 z-10 top-1/2 transform -translate-y-1/2 -rotate-90 text-4xl text-gray-600  font-bold":"z-10 absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-4xl text-gray-600 font-bold"}>
                {item.year}
              </div>
              <div
                className={
                  index % 2 === 0
                    ? "absolute -left-[40%] w-[300px] z-0"
                    : "absolute -right-[40%] w-[300px] z-0"
                }
              >
                <img
                  src={item.image}
                  alt="education"
                  className=" lg:w-[100%]  opacity-75 transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="flexflex-col gap-4 w-[90%] px-6 py-4 z-10 ">
                <div className="flex flex-col">
                  <div className="text-lg text-sky-500 font-semibold">
                    {item.title}
                  </div>
                  <div className="">{item.institution}</div>
                </div>
                <div>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
