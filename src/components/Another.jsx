import React from "react";

const Another = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white pb-[100px]">
      <p className="text-center text-[10px]">Supported and backed by :</p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-5 ">
        <p className="bg-white text-black px-10 py-2">Lorem</p>
        <p className="bg-white text-black px-10 py-2">Ipsum</p>
        <p className="bg-white text-black px-[42px] py-2">Dolor</p>
        <p className="bg-white text-black px-[52px] py-2">Sit</p>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mt-5">
        <p className="bg-white text-black px-[42px] py-2">Dolor</p>
        <p className="bg-white text-black px-[52px] py-2">Sit</p>
        <p className="bg-white text-black px-10 py-2">Lorem</p>
        <p className="bg-white text-black px-10 py-2">Ipsum</p>
      </div>
      <h1 className="mt-5 text-center text-xl">Less code. More Product.</h1>
      <p className="max-w-[350px] text-[12px]">
        By using our UI kit, we make sure you only get to{" "}
        <span className="text-[#FFFF00]">focus more</span> on the other things
        that matter
      </p>
    </div>
  );
};

export default Another;
