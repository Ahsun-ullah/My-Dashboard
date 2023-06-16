import React from "react";
import Navbar from "../../../components/navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-screen mt-[30px] bg-neutral-100  text-neutral-800 font-poppins">
        <div className="relative mx-[230px] my-[270px] rounded-3xs bg-white w-[900px] h-[564px] overflow-hidden">
          <img
            className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-[450px] object-cover"
            alt=""
            src="/rectangle-38@2x.png"
          />
          <div className="absolute top-[40px] left-[490px] flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-semibold">Login</div>
              <div className="relative text-base font-light">
                Donec tortor quam at duis tortor.
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[20px] text-sm">
              <div className="w-[370px] flex flex-col items-start justify-start gap-[5px]">
                <label className="relative font-light">E-Mail</label>
                <input
                  type="email"
                  placeholder="Placeholder content"
                  className="self-stretch rounded-8xs bg-white flex flex-row py-2.5 px-[15px] items-center justify-start text-base border-[1px] border-solid border-neutral-300"
                />
              </div>
              <div className="w-[370px] flex flex-col items-start justify-start gap-[5px]">
                <label className="relative font-light">Password</label>
                <input
                  type="password"
                  placeholder="Placeholder content"
                  className="self-stretch rounded-8xs bg-white flex flex-row py-2.5 px-[15px] items-center justify-start text-base border-[1px] border-solid border-neutral-300"
                />
              </div>
              <div className="relative font-semibold text-neutral-600">
                Forgot password?
              </div>
              <button className="self-stretch rounded-8xs bg-blue-600 flex flex-row py-2.5 px-5 items-center justify-center text-base text-white">
                <span className="relative font-medium">Login</span>
              </button>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px] text-xs text-neutral-400">
              <div className="w-[370px] flex flex-row items-center justify-start">
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-neutral-200" />
                <div className="bg-white flex flex-col py-[5px] px-2.5 items-start justify-start">
                  <div className="relative font-light">or</div>
                </div>
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-neutral-200" />
              </div>
              <button className="self-stretch rounded-8xs flex flex-row py-2.5 px-5 items-center justify-center text-base text-neutral-600 border-[1px] border-solid border-neutral-600">
                <span className="relative font-medium">Register now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
