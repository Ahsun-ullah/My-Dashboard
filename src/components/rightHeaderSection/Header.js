import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center  h-[77px] bg-white mt-[55px] ml-[260px] font-poppins">
      <div className="flex justify-between items-center  h-[33px] my-[22px] ">
        <h1 className=" text-lg font-semibold px-[30px]">Add new post</h1>

        <div className="flex justify-between items-center my-[4.5px] ">
          <img
            className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
            src="/plus.svg"
            alt=""
          />

          <h3 className="ml-2 relative pr-[25px] text-base font-normal font-poppins text-neutral-800 text-left">
            Add Content
          </h3>

          <div className="flex justify-between items-center ">
            <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/settings.svg"
              alt=""
            />
            <h3 className="ml-2 relative text-base font-normal font-poppins text-neutral-800 text-left">
              Settings
            </h3>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-between mr-[30px] rounded-8xs bg-white p-[10px] items-center  text-base text-black border-[1px] border-solid border-neutral-300">
        <input
          placeholder="Search Content..."
          className="[border:none] bg-[transparent] relative font-semibold h-full overflow-hidden shrink-0"
          type="text"
        />
        <img
          className=" [border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
          src="/search.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
