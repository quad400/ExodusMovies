import React from "react";

export const latest = [
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
];

const LatestMovies = () => {

  return (
    <div className="flex flex-row justify-center items-center space-x-5 mx-10">
      {latest.map((item) => {
        return (
          <div key={item.id} className="transition-all ease-in hover:scale-105">
            <img
              className="w-70 md:h-60 md:w-60 sm:h-50 sm:w-50"
              alt={item.title}
              src={item.image}
            />
            <div className="mt-3 space-y-2">
              <p className="text-xs font-semibold text-white">{item.title}</p>
              <div className="flex flex-row justify-start items-center space-x-2">
                <p className="text-xs font-semibold text-white">
                  <span className="text-neutral-300 font-medium">
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
        );
      })}
    </div>
  );
};

export default LatestMovies;
