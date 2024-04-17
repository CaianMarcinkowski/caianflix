import useBillboard from "@/hooks/userBillbord";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const Billboard = () => {
  const { data } = useBillboard();

  const maxLength = 460;
  let description = data?.description || "";

  description =
    description.length > maxLength
      ? `${description.substring(0, maxLength)}...`
      : description;

  return (
    <div className="relative h-[45.25vw]">
      <video
        className="w-full h-[45.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[40%] md:top-[35%] ml-4 md:ml-16">
        <p
          className="
        text-white 
        text-1xl 
        md:text-5xl 
        h-full 
        w-[50%] 
        lg:text-6xl 
        font-bold 
        drop-shadow-xl"
        >
          {data?.title}
        </p>
        <p
          className="
        text-white
        text-[8px]
        md:text-lg
        mt-3
        md:mt-8
        w-[80%]
        lg:w-[50%]
        drop-shadow-xl
        "
        >
          {description}
        </p>
        <div className=" flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
          bg-white
          text-white
          bg-opacity-30
          rounded-md
          py-1 md:pya-2
          px-2 md:px-4
          w-auto
          text-ts lg:text-lg
          font-semibold
          flex
          flex-row
          items-center
          hover: bg-opacity-20
          transition
          "
          >
            <FaInfoCircle className="mr-1" />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
