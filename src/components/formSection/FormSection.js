import React from "react";

const FormSection = () => {
  return (
    <div className=" flex flex-col items-start h-[2140px] ml-[260px] m-[30px] text-left text-sm text-neutral-800 font-poppins">
      <div className="w-full flex justify-between gap-[30px] ml-[30px] mb-[30px]">
        <div className="flex justify-start basis-1/4 rounded-3xs bg-white  py-3 px-8 items-start ">
          <div className="pr-2 relative w-[45px] h-[45px] overflow-hidden shrink-0">
            <img src="/shopping-bag.svg" alt="" />
          </div>
          <div className=" flex flex-col items-start justify-start">
            <h4 className="m-0 relative text-[inherit] font-light font-inherit">
              Total Sales
            </h4>
            <h2 className="m-0 relative text-3xl font-semibold font-inherit">
              $2,456
            </h2>
          </div>
        </div>
        <div className="flex justify-start basis-1/4 rounded-3xs bg-white  py-3 px-8 items-start ">
          <div className="pr-2 relative w-[45px] h-[45px] overflow-hidden shrink-0">
            <img src="/shop.svg" alt="" />
          </div>
          <div className=" flex flex-col items-start justify-start">
            <h4 className="m-0 relative text-[inherit] font-light font-inherit">
              Total Expenses
            </h4>
            <h2 className="m-0 relative text-3xl font-semibold font-inherit">
              $3,326
            </h2>
          </div>
        </div>
        <div className="flex justify-start basis-1/4 rounded-3xs bg-white  py-3 px-8 items-start ">
          <div className="pr-2 relative w-[45px] h-[45px] overflow-hidden shrink-0">
            <img src="/users.svg" alt="" />
          </div>
          <div className=" flex flex-col items-start justify-start">
            <h4 className="m-0 relative text-[inherit] font-light font-inherit">
              Total Users
            </h4>
            <h2 className="m-0 relative text-3xl font-semibold font-inherit">
              5,325
            </h2>
          </div>
        </div>
        <div className="flex justify-start basis-1/4 rounded-3xs bg-white  py-3 px-8 items-start mr-[30px] ">
          <div className="pr-2 relative w-[45px] h-[45px] overflow-hidden shrink-0">
            <img src="/list.svg" alt="" />
          </div>
          <div className=" flex flex-col items-start justify-start">
            <h4 className="m-0 relative text-[inherit] font-light font-inherit">
              Total orders
            </h4>
            <h2 className="m-0 relative text-3xl font-semibold font-inherit">
              1326
            </h2>
          </div>
        </div>
      </div>
      {/*---->  Post Side  components - Form title dashboard section  <------*/}
      <div className=" flex flex-col rounded-3xs bg-white w-[1182px] h-[709px] p-[30px] ml-[30px] box-border items-start gap-[20px] text-base">
        <div className="flex flex-col items-start justify-start text-3xl">
          <h1 className="m-0 relative text-[inherit] font-semibold font-inherit">
            Form title
          </h1>
          <h4 className="m-0 relative text-base font-light font-inherit">
            Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
            augue enim.
          </h4>
        </div>
        <div className="self-stretch rounded-8xs bg-red-50 flex flex-row p-[15px] items-center justify-start gap-[10px] text-red-900 border-[1px] border-solid border-red-400">
          <div className="pr-2 relative w-[45px] h-[45px] overflow-hidden shrink-0">
            <img src="/info.svg" alt="" />
          </div>
          <h3 className="m-0 relative text-[inherit] font-normal font-inherit">
            Senectus malesuada suspendisse bibendum elit amet vitae.
          </h3>
        </div>
        <div className="self-stretch rounded-8xs overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-neutral-300 ">
          <div className="flex-1 bg-white flex flex-col items-start justify-start">
            <div className="self-stretch bg-neutral-300 flex flex-row py-2.5 px-5 items-start justify-start text-lg">
              <div className="relative font-medium">Table Title</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Etiam purus in</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Duis eget habitant</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Aliquam velit lacus</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Fermentum scelerisque ultricies</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Integer semper pellentesque</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Parturient at id</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Amet, pretium eget</div>
            </div>
          </div>
          <div className="flex-1 bg-white flex flex-col items-start justify-start">
            <div className="self-stretch bg-neutral-300 flex flex-row py-2.5 px-5 items-start justify-start text-lg">
              <div className="relative font-medium">Table Title</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Etiam purus in</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Duis eget habitant</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Aliquam velit lacus</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Fermentum scelerisque ultricies</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Integer semper pellentesque</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Parturient at id</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Amet, pretium eget</div>
            </div>
          </div>

          <div className="flex-1 bg-white flex flex-col items-start justify-start">
            <div className="self-stretch bg-neutral-300 flex flex-row py-2.5 px-5 items-start justify-start text-lg">
              <div className="relative font-medium">Table Title</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Etiam purus in</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Duis eget habitant</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Aliquam velit lacus</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Fermentum scelerisque ultricies</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Integer semper pellentesque</div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Parturient at id</div>
            </div>
            <div className="self-stretch flex flex-row py-2.5 px-5 items-start justify-start">
              <div className="relative">Amet, pretium eget</div>
            </div>
          </div>

          <div className="flex-1 bg-white flex flex-col items-start justify-start -mt-3">
            <div className="self-stretch bg-neutral-300 flex flex-row mt-[30px] px-5 py-[10px] items-start justify-start text-lg">
              <div className="relative font-medium">Table Title</div>
            </div>
            <div className="self-stretch flex flex-row mt-5 px-5 items-center justify-start gap-[10px]">
              <div className="rounded-10xs bg-blue-700 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Edit</div>
              </div>
              <div className="rounded-10xs bg-amber-600 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Delete</div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-center justify-start gap-[10px]">
              <div className="rounded-10xs bg-blue-700 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Edit</div>
              </div>
              <div className="rounded-10xs bg-amber-600 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Delete</div>
              </div>
            </div>{" "}
            <div className="self-stretch flex flex-row py-2.5 px-5 items-center justify-start gap-[10px]">
              <div className="rounded-10xs bg-blue-700 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Edit</div>
              </div>
              <div className="rounded-10xs bg-amber-600 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Delete</div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-center justify-start gap-[10px]">
              <div className="rounded-10xs bg-blue-700 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Edit</div>
              </div>
              <div className="rounded-10xs bg-amber-600 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Delete</div>
              </div>
            </div>{" "}
            <div className="self-stretch flex flex-row py-2.5 px-5 items-center justify-start gap-[10px]">
              <div className="rounded-10xs bg-blue-700 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Edit</div>
              </div>
              <div className="rounded-10xs bg-amber-600 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Delete</div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-100 flex flex-row py-2.5 px-5 items-center justify-start gap-[10px]">
              <div className="rounded-10xs bg-blue-700 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Edit</div>
              </div>
              <div className="rounded-10xs bg-amber-600 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Delete</div>
              </div>
            </div>{" "}
            <div className="self-stretch flex flex-row py-2.5 px-5 items-center justify-start gap-[10px]">
              <div className="rounded-10xs bg-blue-700 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Edit</div>
              </div>
              <div className="rounded-10xs bg-amber-600 flex flex-row py-[3px] px-[5px] items-center justify-start gap-[5px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/usave.svg"
                />
                <div className="relative">Delete</div>
              </div>
            </div>
          </div>
        </div>
        {/*---->  Post Side  components - dashboard pagination section  <------*/}
        <div className="self-stretch flex flex-row items-center justify-center gap-[5px] text-sm text-white">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] opacity-[0.4]">
            <img
              className="absolute h-[57.86%] w-[36.79%] top-[21.07%] right-[46.07%] bottom-[21.07%] left-[17.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-9.svg"
            />
            <img
              className="absolute h-[57.86%] w-[36.79%] top-[21.07%] right-[21.07%] bottom-[21.07%] left-[42.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-10.svg"
            />
          </button>
          <button className="cursor-pointer p-0 bg-[transparent] rounded-8xs box-border w-[35px] h-[35px] flex flex-row items-center justify-center border-[1px] border-solid border-neutral-400">
            <div className="relative text-sm font-medium font-poppins text-neutral-800 text-left">
              1
            </div>
          </button>
          <div className="rounded-8xs bg-blue-600 w-[35px] h-[35px] flex flex-row items-center justify-center">
            <div className="relative font-medium">2</div>
          </div>
          <button className="cursor-pointer p-0 bg-[transparent] rounded-8xs box-border w-[35px] h-[35px] flex flex-row items-center justify-center border-[1px] border-solid border-neutral-400">
            <div className="relative text-sm font-medium font-poppins text-neutral-800 text-left">
              3
            </div>
          </button>
          <button className="cursor-pointer p-0 bg-[transparent] rounded-8xs box-border w-[35px] h-[35px] flex flex-row items-center justify-center border-[1px] border-solid border-neutral-400">
            <div className="relative text-sm font-medium font-poppins text-neutral-800 text-left">
              4
            </div>
          </button>
          <button className="cursor-pointer p-0 bg-[transparent] rounded-8xs box-border w-[35px] h-[35px] flex flex-row items-center justify-center border-[1px] border-solid border-neutral-400">
            <div className="relative text-sm font-medium font-poppins text-neutral-800 text-left">
              5
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px]">
            <img
              className="absolute h-[57.86%] w-[36.79%] top-[21.07%] right-[17.14%] bottom-[21.07%] left-[46.07%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-91.svg"
            />
            <img
              className="absolute h-[57.86%] w-[36.79%] top-[21.07%] right-[42.14%] bottom-[21.07%] left-[21.07%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-101.svg"
            />
          </button>
        </div>
      </div>

      {/*---->  Post Side  components - Form title form section  <------*/}
      <div className="flex flex-col rounded-3xs bg-white w-[1182px]  h-[653px]  p-[30px] ml-[30px] box-border mt-[30px] gap-[20px]">
        <div className="flex flex-col items-start justify-start text-3xl">
          <h1 className="m-0 relative text-[inherit] font-semibold font-inherit">
            Form title
          </h1>
          <h4 className="m-0 relative text-base font-light font-inherit">
            Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
            augue enim.
          </h4>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px] text-base">
          <div className="rounded-8xs bg-amber-200 flex flex-row py-[5px] pr-2.5 pl-[5px] items-center justify-start gap-[5px] border-[1px] border-solid border-amber-600">
            <img
              className="relative rounded-10xs w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/flag.svg"
            />
            <h3 className="m-0 relative text-[inherit] font-normal font-inherit">
              English
            </h3>
          </div>
          <div className="rounded-8xs flex flex-row py-[5px] pr-2.5 pl-[5px] items-center justify-start gap-[5px] border-[1px] border-solid border-neutral-300">
            <img
              className="relative rounded-10xs w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/flag1.svg"
            />
            <h3 className="m-0 relative text-[inherit] font-normal font-inherit">
              Turkish
            </h3>
          </div>
        </div>

        {/*---->  Post Side  components - flag form section  <------*/}
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
          <h3 className="m-0 relative text-[inherit] font-light font-inherit">
            Label title
          </h3>
          <input
            className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
            type="text"
            placeholder="Placeholder content"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-between border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Chose"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
          <h3 className="m-0 relative text-[inherit] font-light font-inherit">
            Label Title
          </h3>
          <input
            className="font-light font-poppins text-base bg-white self-stretch rounded-8xs box-border h-[125px] flex flex-row py-2.5 px-[15px] items-start justify-start border-[1px] border-solid border-neutral-300"
            type="text"
            placeholder="Placeholder content"
          />
        </div>
      </div>

      {/*---->  Post Side  components - last form section  <------*/}

      <div className=" w-[1180px] h-[598px] flex flex-row items-start justify-start ml-[30px] mt-[30px] gap-[30px]">
        <div className="flex-1 rounded-3xs bg-white flex flex-col p-[30px] items-start justify-start gap-[20px]">
          <div className="flex flex-col items-start justify-start text-3xl">
            <h1 className="m-0 relative text-[inherit] font-semibold font-inherit">
              Form title
            </h1>
            <h4 className="m-0 relative text-base font-light font-inherit">
              Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
              augue enim.
            </h4>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <label className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </label>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-between border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Chose"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
              <h3 className="m-0 relative text-[inherit] font-light font-inherit">
                Label title
              </h3>
              <input
                className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
                type="text"
                placeholder="Placeholder content"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
              <h3 className="m-0 relative text-[inherit] font-light font-inherit">
                Label title
              </h3>
              <input
                className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
                type="text"
                placeholder="Placeholder content"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label Title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs box-border h-[135px] flex flex-row py-2.5 px-[15px] items-start justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
        </div>

        <div className="rounded-3xs bg-white w-[310px] flex flex-col p-[30px] box-border items-start justify-start gap-[20px]">
          <h1 className="m-0 relative text-[inherit] font-semibold font-inherit">
            Form title
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
          <form className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-sm font-light font-poppins text-neutral-800 text-left">
              Label title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs flex flex-row py-2.5 px-[15px] items-center justify-between border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Chose"
            />
          </form>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-[inherit] font-light font-inherit">
              Label Title
            </h3>
            <input
              className="font-light font-poppins text-base bg-white self-stretch rounded-8xs box-border h-[165px] flex flex-row py-2.5 px-[15px] items-start justify-start border-[1px] border-solid border-neutral-300"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-5 bg-blue-600 self-stretch rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-base font-medium font-poppins text-white text-left">
              Button title
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
