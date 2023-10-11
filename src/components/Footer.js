import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(109deg, rgba(13, 13, 13, 0.50) 2.46%, rgba(13, 13, 13, 0.30) 100%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex flex-row justify-start items-start mt-20 py-20 px-16">
        <div className="flex flex-col justify-start items-end w-2/5 mr-20">
          <p className="font-medium text-white text-[24px] w-full text-left">
            CODERBLACK
          </p>
          <p className="font-light mt-12 text-white text-[14px]">
            CODERBLACK is the world largest developing e-commerce community
            online
          </p>
          <div className="flex mt-3 flex-row justify-start items-center w-full space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M27.5 4.99854C26.525 5.57729 24.5688 6.36604 23.4188 6.59354C23.385 6.60229 23.3575 6.61353 23.325 6.62228C22.3088 5.61978 20.9163 4.99854 19.375 4.99854C16.2688 4.99854 13.75 7.51728 13.75 10.6235C13.75 10.7873 13.7362 11.0885 13.75 11.2485C9.55875 11.2485 6.36875 9.05353 4.08125 6.24854C3.8325 6.87354 3.72375 7.86104 3.72375 8.78854C3.72375 10.5398 5.0925 12.2598 7.22375 13.326C6.83125 13.4273 6.39875 13.4998 5.94875 13.4998C5.2225 13.4998 4.45375 13.3085 3.75 12.7285C3.75 12.7498 3.75 12.7698 3.75 12.7923C3.75 15.2398 6.3475 16.906 8.6575 17.3698C8.18875 17.646 7.24375 17.6735 6.7825 17.6735C6.4575 17.6735 5.3075 17.5248 5 17.4673C5.6425 19.4735 7.96 20.601 10.1688 20.641C8.44125 21.996 7.2425 22.4985 3.705 22.4985H2.5C4.735 23.931 7.58125 24.9998 10.4338 24.9998C19.7213 24.9998 25 17.921 25 11.2485C25 11.141 24.9975 10.916 24.9938 10.6898C24.9938 10.6673 25 10.646 25 10.6235C25 10.5898 24.99 10.5573 24.99 10.5235C24.9862 10.3535 24.9825 10.1948 24.9788 10.1123C25.9662 9.39979 26.8225 8.51104 27.5 7.49854C26.5938 7.90104 25.6213 8.17104 24.6 8.29354C25.6425 7.66854 27.1238 6.17854 27.5 4.99854Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M23.75 3.75H6.25C4.86875 3.75 3.75 4.86875 3.75 6.25V23.75C3.75 25.1313 4.86875 26.25 6.25 26.25H15.7763V17.5487H12.8475V14.1425H15.7763V11.6363C15.7763 8.73125 17.5525 7.1475 20.145 7.1475C21.0187 7.145 21.8913 7.19 22.76 7.27875V10.3163H20.975C19.5625 10.3163 19.2875 10.9837 19.2875 11.9688V14.1375H22.6625L22.2237 17.5437H19.2675V26.25H23.75C25.1313 26.25 26.25 25.1313 26.25 23.75V6.25C26.25 4.86875 25.1313 3.75 23.75 3.75Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M10 3.75C6.54875 3.75 3.75 6.54875 3.75 10V20C3.75 23.4513 6.54875 26.25 10 26.25H20C23.4513 26.25 26.25 23.4513 26.25 20V10C26.25 6.54875 23.4513 3.75 20 3.75H10ZM22.5 6.25C23.19 6.25 23.75 6.81 23.75 7.5C23.75 8.19 23.19 8.75 22.5 8.75C21.81 8.75 21.25 8.19 21.25 7.5C21.25 6.81 21.81 6.25 22.5 6.25ZM15 8.75C18.4513 8.75 21.25 11.5487 21.25 15C21.25 18.4513 18.4513 21.25 15 21.25C11.5487 21.25 8.75 18.4513 8.75 15C8.75 11.5487 11.5487 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z"
                fill="white"
              />
            </svg>
          </div>
          
          <ul className="max-sm:flex mt-6 flex-col justify-start items-start w-full sm:hidden">
            <li>
              <span className="text-white text-[18px] font-medium">Legal</span>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Terms and conditions
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Privacy and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-10 max-sm:grid-cols-1 w-full">
          <ul>
            <li>
              <span className="text-white text-[18px] font-medium">
                Company
              </span>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                About
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Contact Us
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Support
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Carrers
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text-white text-[18px] font-medium">
                Quick Link
              </span>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Share Location
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Order Tracking
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Size Guard
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                FAQs
              </Link>
            </li>
          </ul>
          <ul className="max-sm:hidden">
            <li>
              <span className="text-white text-[18px] font-medium">Legal</span>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Terms and conditions
              </Link>
            </li>
            <li className="mt-[16px]">
              <Link className="text-white text-[12px] font-extralight">
                Privacy and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="pb-4 text-[12px] text-center text-white font-normal">
        Copyright Coderblack All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
