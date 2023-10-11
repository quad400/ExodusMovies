import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Top10Movies = () => {
  const top10movies = [
    {
      id: 1,
      image: require("../assets/images/latest1.png"),
      title: "Black Widow",
      rate: 4,
    },
    {
      id: 2,
      image: require("../assets/images/latest2.png"),
      title: "Grayman",
      rate: 4,
    },
    {
      id: 3,
      image: require("../assets/images/latest3.png"),
      title: "Wonder Woman",
      rate: 4,
    },
    {
      id: 4,
      image: require("../assets/images/extraction 2.png"),
      title: "Extraction 2",
      rate: 4,
    },
    {
      id: 5,
      image: require("../assets/images/latest1.png"),
      title: "Black Widow",
      rate: 4,
    },
    {
      id: 6,
      image: require("../assets/images/latest2.png"),
      title: "Grayman",
      rate: 4,
    },
    {
      id: 7,
      image: require("../assets/images/latest3.png"),
      title: "Wonder Woman",
      rate: 4,
    },
  ];


  return (
    <div className="bg-white relative py-[60px] px-[20px]">
      <img
      alt="cross1"
        src={require("../assets/images/cross2.png")}
        className="absolute left-0 bottom-0 w-40 h-40"
      />
      <img
      alt="cross2"
        src={require("../assets/images/cross1.png")}
        className="absolute right-0 top-0 w-40 h-40"
      />
      <div className="flex flex-row max-sm:hidden justify-start items-center">
        <div className="w-4/5">
          <h3 className="font-semibold text-[56px] max-lg:text-[40px] max-md:text-[30px] ">
            <span className="text-red-600">Top 10 </span>Movies For This Month
          </h3>
          <p className="text-black text-[14px] max-md:text-[10px]">
            This movies are rated by how customers and are also rated by the
            most watched movies for the month.
          </p>
        </div>
        <Swiper // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* <div className="flex flex-row overflow-scroll justify-center items-center space-x-5 mx-10"> */}
          {top10movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  key={item.id}
                  className="transition-all ease-in hover:scale-105"
                >
                  <img
                    className="w-70 h-80 max-md:h-60 max-md:w-60 max-sm:h-50 max-sm:w-50"
                    alt={item.title}
                    src={item.image}
                  />
                 <div className="mt-3 space-y-2">
                    <p className="text-xs font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <div className="flex flex-row justify-start items-center space-x-2">
                      <p className="text-xs font-semibold text-gray-800">
                        <span className="text-neutral-500 font-medium">
                          Rating :{" "}
                        </span>
                        {item.rate}/5
                      </p>
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
                </div>
              </SwiperSlide>
            );
          })}
          {/* </div> */}
        </Swiper>
      </div>
      <div className="sm:hidden">
        <div className="flex flex-col sm:hidden justify-start items-center mb-6">
          <div className="w-4/5">
            <h3 className="font-semibold text-[56px] text-center max-lg:text-[40px] max-md:text-[30px] ">
              <span className="text-red-600">Top 10 </span>Movies For This Month
            </h3>
            <p className="text-black text-[14px] text-center max-md:text-[10px]">
              This movies are rated by how customers and are also rated by the
              most watched movies for the month.
            </p>
          </div>
        </div>

        <Swiper // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* <div className="flex flex-row overflow-scroll justify-center items-center space-x-5 mx-10"> */}
          {top10movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  key={item.id}
                  className="transition-all ease-in hover:scale-105"
                >
                  <img
                    className="w-70 md:h-60 md:w-60 sm:h-50 sm:w-50"
                    alt={item.title}
                    src={item.image}
                  />
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <div className="flex flex-row justify-start items-center space-x-2">
                      <p className="text-xs font-semibold text-gray-800">
                        <span className="text-neutral-500 font-medium">
                          Rating :{" "}
                        </span>
                        {item.rate}/5
                      </p>
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
                </div>
              </SwiperSlide>
            );
          })}
          {/* </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Top10Movies;
