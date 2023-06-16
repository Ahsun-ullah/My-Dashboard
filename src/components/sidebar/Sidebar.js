import React from "react";

const Sidebar = () => {
  return (
    <div className="absolute text-white font-poppins h-[2250px] top-[55px] bottom-[0%] left-[0%] bg-neutral-800 w-[260px] overflow-hidden">
      <div className="absolute w-[280px] top-[0px] right-[0%] left-[0%] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col py-[15px] px-[30px] items-start justify-start">
          <button className="cursor-pointer [border:none] p-2.5 bg-neutral-200 self-stretch rounded-8xs flex flex-row items-center justify-start gap-[5px]">
            <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/plus.svg"
              alt=""
            />
            <h3 className="m-0 relative text-lg font-medium font-poppins text-neutral-900 text-left">
              New Item
            </h3>
          </button>
        </div>

        {/*---->  SideBar components - Dashboard section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Dashboard</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-up.svg"
          />
        </div>
        <div className="self-stretch flex flex-col pt-0 pb-[15px] pr-0 pl-[50px] items-start justify-start gap-[10px]">
          <div className="relative font-medium">Commerce</div>
          <div className="relative font-medium">Analytics</div>
          <div className="relative font-medium">Cyrpto</div>
          <div className="relative font-medium">Helpdesk</div>
          <div className="relative font-medium">Monitoring</div>
          <div className="relative font-medium">Fitnes</div>
        </div>

        {/*---->  Navbar components - Application section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Application</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-down.svg"
          />
        </div>

        {/*---->  Navbar components - Elements section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Elements</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-down.svg"
          />
        </div>

        {/*---->  Navbar components - Forms section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Forms</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-down.svg"
          />
        </div>

        {/*---->  Navbar components - Plugins section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Plugins</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-down.svg"
          />
        </div>

        {/*---->  Navbar components - Elements section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Elements</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-down.svg"
          />
        </div>

        {/*---->  Navbar components - DataGrid section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Datagrid</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-down.svg"
          />
        </div>

        {/*---->  Navbar components - Settings section  <------*/}

        <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between border-t-[1px] border-solid border-neutral-900">
          <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
              className="[border:none] relative w-[20px] h-[20px] overflow-hidden  shrink-0"
              src="/icons8-dashboard-48.png"
              alt=""
            />
            <div className="relative font-medium">Settings</div>
          </div>
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/expand-down.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
