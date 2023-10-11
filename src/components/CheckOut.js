import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="bg-[#A52A2A] w-full justify-center items-center py-10 flex flex-col">
      <div className="w-4/5">
        <h3 className="text-[56px] font-semibold text-white text-center">
          Checkout Our VIP Subscriptions
        </h3>
        <div className="flex w-full justify-center">
          <p className="text-[14px] font-light w-4/5 text-white text-center my-8">
            we offer a series of services to better your cinema experience. From
            booking tickets to purchasing snacks, seat selection and other
            services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3">
        <div className="bg-white/10 backdrop-filter-[500px] p-8 rounded-md border-1 border-white border">
          <h4 className="text-[24px] font-medium text-white">Standard</h4>
          <h4 className="text-[40px] font-medium text-white">N15000</h4>
          <p className="text-[24px] font-medium text-white">/monthly</p>
          <div>
            <span className="flex flex-row items-center justify-start mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">Avoid queue</p>
            </span>
          </div>
          {/* < className=""> */}
          <div className="mt-[70px] hover:scale-110 cursor-pointer transition-all ease-in-out bg-white w-full py-3 rounded-sm shadow-md flex justify-center items-center">
            <Link className="text-center  text-black font-semibold">
              Choose Plan
            </Link>
          </div>
          {/* </> */}
        </div>
        <div className="bg-white/10 backdrop-filter-[500px] p-8 rounded-md border-1 border-white border">
          <h4 className="text-[24px] font-medium text-white">Standard</h4>
          <h4 className="text-[40px] font-medium text-white">N15000</h4>
          <p className="text-[24px] font-medium text-white">/monthly</p>
          <div>
            <span className="flex flex-row items-center justify-start mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">Avoid queue</p>
            </span>
          </div>
          {/* < className=""> */}
          <div className="mt-[70px] hover:scale-110 cursor-pointer transition-all ease-in-out bg-white w-full py-3 rounded-sm shadow-md flex justify-center items-center">
            <Link className="text-center  text-black font-semibold">
              Choose Plan
            </Link>
          </div>
          {/* </> */}
        </div>
        <div className="bg-white/10 backdrop-filter-[500px] p-8 rounded-md border-1 border-white border">
          <h4 className="text-[24px] font-medium text-white">Standard</h4>
          <h4 className="text-[40px] font-medium text-white">N15000</h4>
          <p className="text-[24px] font-medium text-white">/monthly</p>
          <div>
            <span className="flex flex-row items-center justify-start mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">
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
                class="w-6 h-6 mr-20"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-[18px] text-white font-normal">Avoid queue</p>
            </span>
          </div>
          {/* < className=""> */}
          <div className="mt-[70px] hover:scale-110 cursor-pointer transition-all ease-in-out bg-white w-full py-3 rounded-sm shadow-md flex justify-center items-center">
            <Link className="text-center  text-black font-semibold">
              Choose Plan
            </Link>
          </div>
          {/* </> */}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
