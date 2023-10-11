import React from "react";
import { Link } from "react-router-dom";

const NowShowing = () => {
  return (
    <div className="mt-20 relative">
      <div className="flex flex-row justify-between items-center px-[20px]">
        <h3 className="font-bold text-white max-md:text-[36px] max-sm:text-[24px] text-[56px]">
          <span className="text-red-600">Now</span> Showing
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
          color="white"
        >
          <path
            fill-rule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="mt-10 flex flex-row justify-start items-start">
         
          <div className="bg-black w-full mt-[40px] pb-[80px] px-[20px] flex flex-row justify-between items-center space-x-10">
        <img
          src={require("../assets/images/extraction 2.png")}
          alt="extraction"
          className="max-sm:h-40 max-sm:w-1/3 max-md:h-60 max-md:w-1/3 max-lg:h-100 max-lg:w-1/3"
        />
            <div className="w-full bg-transparent">
            <h3 className="font-semibold max-md:text-[26px] text-white text-[48px]">
            Extraction 2
          </h3>
              <div className="flex flex-row justify-start items-center">
                <span className="text-neutral-300 font-medium text-[20px] max-md:text-[16px]">
                  Ratings
                </span>
                <div className="flex flex-row ml-3 space-x-2 justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                    color="gold"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                    color="gold"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                    color="gold"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                    color="gold"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                    color="gold"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
           
            <div className="flex flex-row justify-start items-center space-x-2">
              <span className="text-[14px] max-sm:text-[10px] text-red-600 font-semibold">
                23.5k
              </span>
              <span className="text-[12px] max-sm:text-[8px] ml-3 text-white font-semibold">
                reviews by our customers
              </span>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold max-md:text-[16px] max-sm:text-[14px] text-slate-200 text-[24px] max-sm:my-[8px] my-[24px] max-md:my-[12px]">
                Description
              </p>
              <p className="text-slate-200 font-normal text-[20px] max-md:text-[12px] max-sm:text-[8px]">
                9 months after barely surviving a previous mission in Dhaka,
                Bangladesh, Tyler Rake retires from mercenary work to a cabin in
                Austria to recuperate. There, he is approached by a stranger and
                asked to rescue Ketevan, the sister of his ex-wife Mia, and her
                two children, Sandro and Nina, from Georgia.
              </p>

              <h3 className="font-semibold max-md:text-[16px] max-sm:text-[14px] text-slate-200 text-[24px] max-sm:my-[8px] my-[24px] max-md:my-[12px]">
                Cast
              </h3>
              <p className="text-slate-200 font-normal text-[20px] max-md:text-[12px] max-sm:text-[8px]">
                Chris Hemsworth, Golshifteh Farahani, Adam Bessa, Olga Kurylenko
              </p>
              <Link className="transition-all ease-in-out hover:scale-110 bg-white mt-[32px] w-3/5 rounded-sm text-sm text-black text-center font-semibold px-5 py-3 max-md:w-4/5 max-sm:w-fit max-sm:text-[12px]">
                Book Ticket For N5000
              </Link>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NowShowing;
