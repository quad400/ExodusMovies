import React from "react";

const WhatWeOffer = () => {
  const offer = [
    {
      id: 1,
      image: require("../assets/images/red-ticket-vector-flat-logo-icon-png-11663776261emdoawyxzn-removebg-preview 1.png"),
      title: "Online Tickets",
      desc: "You get online tickets every time you book for a movie on our site ",
    },
    {
      id: 2,
      image: require("../assets/images/pop_corn-removebg-preview 1.png"),
      title: "Snacks",
      desc: "Pre order your snacks before you get to the cinema",
    },
    {
      id: 3,
      image: require("../assets/images/seat-removebg-preview 1.png"),
      title: "Seat Selection",
      desc: "Select your desired seat but you get to the cinema. We save it for you",
    },
    {
      id: 4,
      image: require("../assets/images/queue-removebg-preview 1.png"),
      title: "No Queue",
      desc: "Avoid the queue at the cinema anytime you get your ticket on exodus",
    },
  ];

  return (
    <div className="bg-offer-banner bg-cover bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.7)] py-20">

        <h3 className="font-semibold text-center text-white text-[56px] max-md:text-[30px] max-sm:text-[24px]">
          What do we <span className="text-red-600">offer</span>?
        </h3>
        <p className="text-white max-sm:text-[10px] max-sm:mt-[10px] max-sm:mb-[20px] font-normal text-[14px] text-center mt-[24px] mb-[56px]">
          we offer a series of services to better your cinema experience. From
          booking tickets to purchasing snacks, seat selection and other
          services.
        </p>
        <div className="grid max-md:grid-cols-2 grid-cols-4 gap-3">
          {offer.map((item) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <img src={item.image} alt={item.title} />
                <h4 className="font-medium text-[14px] text-white">
                  {item.title}
                </h4>
                <p className="text-white text-center font-normal text-[12px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
