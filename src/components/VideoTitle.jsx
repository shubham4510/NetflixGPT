import React from "react";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className=" relative bg-black  text-white">
      <div className="absolute top-[55vh] left-7">
        <h1 className=" font-bold text-5xl">{title}</h1>
        <p className=" w-[49vw] my-5">{overview}</p>
        <div>
          <button className=" px-8 py-3 bg-gray-800/80 mr-6">▶️ Play </button>
          <button className="px-8 py-3 bg-red-600">More Info </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
