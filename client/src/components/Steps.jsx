import React from "react";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center my-25 ">
      {" "}
      <h1 className="text-3xl sm:text-4xl mb-2 font-semibold">How it works</h1>
      <p className="text-lg mb-8 text-gray-600">
        Transform words into Stunning Images
      </p>
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border-none cursor-pointer hover:scale-[1.01] transition-all duration-300 rounded-lg"
          >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
