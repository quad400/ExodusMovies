import React from "react";
import NavBar from "../components/NavBar";
import LatestMovies from "../components/LatestMovies";
import NowShowing from "../components/NowShowing";
import WhatWeOffer from "../components/WhatWeOffer";
import Top10Movies from "../components/Top10Movies";
import Booking from "../components/Booking";
import CheckOut from "../components/CheckOut";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-top-banner bg-fixed bg-cover bg-no-repeat bg-center h-fit">
        {/* Nav Bar */}
        <NavBar />
        <div>
          <div className="flex flex-col items-center justify-center mt-40 lg:mt-30">
            <h3 className="lg:text-6xl md:text-5xl text-4xl  font-semibold md:w-4/5 max-sm:w-9/10 text-white text-center">
              Purchasing Showtime Tickets Made Easy
            </h3>
            <div className="w-4/5 md:w-6/8 my-12">
              <p className="text-xs text-center text-slate-50">
                At our company, we aim to provide you with everything to better
                your fashion. We provide you with the latest updates on wears
                and fashion talks. Our goal is to bring your fantasy to reality.
              </p>
            </div>
          </div>
          {/* Latest Movies */}
          <LatestMovies />

          {/* Booking */}
          <Booking />

          <NowShowing />
        </div>
      </div>
      <WhatWeOffer />
      <Top10Movies />
      <CheckOut />

      <div className="bg-top-banner bg-no-repeat bg-cover bg-fixed">
        <div className="pt-20"></div>
        <JoinCommunity />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
