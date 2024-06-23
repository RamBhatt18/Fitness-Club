import React from "react";

import pattern from "../../assets/dumbell.jpg";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className=" text-white py-10 sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Get Started with us.
            </h1>

            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
