import React from "react";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className=" relative w-full  text-white">
      <div className="absolute top-[55vh] left-7 z-[30]">
        <h1 className=" font-bold text-5xl">{title}</h1>
        <p className=" w-[49vw] my-5">{overview}</p>
        <div className="font-bold">
          <button className=" hover:bg-white/70 hover:text-black hover:shadow-sm hover:shadow-white rounded-sm px-8 py-3 bg-gray-800/80 mr-6">▶️ Play </button>
          <button className=" rounded-sm px-8 py-3 bg-red-600">More Info </button>
        </div>
      </div>
      <div className=" h-[50vh]  bg-gradient-to-t from-black z-10 w-full absolute bottom-0 left-0 "></div>
    </div>
  );
};

export default VideoTitle;
