import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const subcriptionInfo = [
    {
      id: 1,
      title: "Basic",
      price: 5000,
    },
    {
      id: 2,
      title: "Standard",
      price: 15000,
    },
    {
      id: 3,
      title: "Premium",
      price: 25000,
    },
  ];

  const [subType, setSubType] = useState("standard");

  return (
    <div className="bg-[#A52A2A] w-full justify-center items-center py-10 flex flex-col px-[20px]">
      <div className="">
        <h3 className="text-[56px] font-semibold text-white text-center max-lg:text-[40px] max-md:text-[30px] max-sm:text-[20px]">
          Checkout Our VIP Subscriptions
        </h3>
        <div className="flex w-full justify-center">
          <p className="text-[14px] font-light w-4/5 text-white text-center my-8 max-sm:my-5 max-md:text-[10px] max-sm:text-[8px]">
            we offer a series of services to better your cinema experience. From
            booking tickets to purchasing snacks, seat selection and other
            services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[40px] max-lg:gap-[20px]">
        {subcriptionInfo.map((item) => {
          return (
            <Link
            onClick={()=> setSubType(item.title.toLowerCase())}
              className={`bg-white/10 transition-all ease-in-out backdrop-filter-[500px] p-8 rounded-md border-1 ${
                subType === item.title.toLowerCase()
                  ? "border-white hover:scale-110"
                  : "border-transparent"
              } border`}
            >
              <h4
                className={`text-[24px] ${
                  subType === item.title.toLowerCase()
                    ? "text-white"
                    : "text-neutral-400"
                } font-medium text-white lg:text-[18px]`}
              >
                {item.title}
              </h4>
              <h4
                className={`text-[40px] ${
                  subType === item.title.toLowerCase()
                    ? "text-white"
                    : "text-neutral-400"
                } font-medium text-white lg:text-[24px]`}
              >
                N{item.price}
              </h4>
              <p
                className={`text-[24px] ${
                  subType === item.title.toLowerCase()
                    ? "text-white"
                    : "text-neutral-400"
                } font-medium text-white`}
              >
                /monthly
              </p>
              <div>
                <span className="flex flex-row items-center justify-start mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-10 max-lg:h-4 max-lg:w-4"
                    color={
                      subType === item.title.toLowerCase() ? "white" : "grey"
                    }
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p
                    className={`text-[18px] ${
                      subType === item.title.toLowerCase()
                        ? "text-white"
                        : "text-neutral-400"
                    } font-normal max-lg:text-[12px]`}
                  >
                    2 Cinema Entrance
                  </p>
                </span>
                <span className="flex flex-row items-center justify-start mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-10 max-lg:h-4 max-lg:w-4"
                    color={
                      subType === item.title.toLowerCase() ? "white" : "grey"
                    }
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p
                    className={`text-[18px] ${
                      subType === item.title.toLowerCase()
                        ? "text-white"
                        : "text-neutral-400"
                    } font-normal max-lg:text-[12px]`}
                  >
                    Snacks and Drinks
                  </p>
                </span>
                <span className="flex flex-row items-center justify-start mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-10 max-lg:h-4 max-lg:w-4"
                    color={
                      subType === item.title.toLowerCase() ? "white" : "grey"
                    }
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p
                    className={`text-[18px] ${
                      subType === item.title.toLowerCase()
                        ? "text-white"
                        : "text-neutral-400"
                    } font-normal max-lg:text-[12px]`}
                  >
                    Snacks and Drinks
                  </p>
                </span>
                <span className="flex flex-row items-center justify-start mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-10 max-lg:h-4 max-lg:w-4"
                    color={
                      subType === item.title.toLowerCase() ? "white" : "grey"
                    }
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p
                    className={`text-[18px] ${
                      subType === item.title.toLowerCase()
                        ? "text-white"
                        : "text-neutral-400"
                    } font-normal max-lg:text-[12px]`}
                  >
                    Avoid queue
                  </p>
                </span>
              </div>
              {/* < className=""> */}
              <div className="mt-[70px] hover:scale-110 cursor-pointer transition-all ease-in-out bg-white w-full py-3 rounded-sm shadow-md flex justify-center items-center">
                <Link className="text-center  text-black font-semibold">
                  Choose Plan
                </Link>
              </div>
              {/* </> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
