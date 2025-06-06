import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [loading, setLoading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [input, setInput] = useState("");

  return (
    <form className="flex flex-col min-h-[90vh] justify-center items-center gap-4">
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rounded" alt="" />

          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          ></span>
        </div>
        <p className={`${!loading ? "hidden" : ""}`}>Loading...</p>
      </div>

      {!isImageLoaded && (
        <div className=" flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            type="text"
            placeholder="Describe what you want to generate"
            className="placeholder-color flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
            //</div>onClick={(e)=>handleSubmit(e)}
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            className="bg-transparent border border-zinc-900 text-black px-9 py-3 rounded-full cursor-pointer"
            onClick={() => {
              setIsImageLoaded(false);
            }}
          >
            Generate Another
          </p>
          <a
            href={image}
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            download
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
