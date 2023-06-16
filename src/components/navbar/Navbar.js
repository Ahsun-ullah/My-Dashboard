import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute bg-neutral-900 w-full h-[55px] overflow-hidden top-0 left-0 text-left text-sm text-white font-poppins">
      {/*---->  Navbar components section  <------*/}
      <div className="absolute top-[17px] left-[30px] flex flex-row items-start justify-start gap-[25px]">
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/uhomealt.svg"
          />
          <Link href="/dashboard" className="relative text-white no-underline">
            Home
          </Link>
        </div>
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/ulistul.svg"
          />
          <Link href="/dashboard" className="relative text-white no-underline">
            Contents
          </Link>
        </div>
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/ulistuialt.svg"
          />
          <Link href="/dashboard" className="relative text-white no-underline">
            Categories
          </Link>
        </div>
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/ucog.svg"
          />
          <Link href="/dashboard" className="relative text-white no-underline">
            Settings
          </Link>
        </div>
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <Link
            href="/dashboard/login"
            className="relative text-white no-underline"
          >
            Login
          </Link>
        </div>
      </div>

      {/*---->  Navbar LoggedIn and LoggedOut section  <------*/}

      <div className="absolute top-[9px] left-[1227px] rounded-[36px] bg-white flex flex-row py-[3px] pr-[15px] pl-[3px] items-center justify-start gap-[5px] text-gray-900">
        <img
          className="relative rounded-[50%] w-[30px] h-[30px] object-cover"
          alt=""
          src="/ellipse-1@2x.png"
        />
        <div className="relative">İsmail İhsan Bülbül</div>
      </div>
    </nav>
  );
};

export default Navbar;
