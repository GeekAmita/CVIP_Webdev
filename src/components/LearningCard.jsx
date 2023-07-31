import React from "react";

function LearningCard({ imgURL, title, description }) {
  return (
    <div className="flex w-1/3 h-[500px] flex-col items-start bg-white shadow-md border border-gray-200 rounded-md p-4">
      <div className="h-48 w-32 flex justify-start items-center">
        <img src={imgURL} alt="card logo" />
      </div>
      <div className="flex flex-col flex-grow pb-8 justify-between">
        <p className="text-3xl text-indigo-500 font-normal underline">
          {title}
        </p>
        <p className="text-xl text-gray-800 font-extralight">{description}</p>
      </div>
    </div>
  );
}

export default LearningCard;
