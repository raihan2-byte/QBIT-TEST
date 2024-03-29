import React from "react";
// import { FaStore } from "react-icons/fa";

const CardBlog = ({Title, Description, CreatedAt}) => {
  return (
    <div className="my-4">
      <div className="flex items-center gap-4">
        <div className="w-[30%] py-[105px] bg-gray-500 rounded-md border border-black lg:py-24 flex md:flex-row flex-col md:items-stretch items-center gap-5 ">
        </div>
        <div className="w-[70%]">
          <div className="font-bold lg:text-2xl">{Title}</div>
          <div className="text-[10px] text-justify lg:text-[15px]">
            {Description}
          </div>
          <div className="text-[10px] lg:text-[12px]">{CreatedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
