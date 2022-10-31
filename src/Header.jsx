import React from "react";

const Header = () => {
  return (
    <section className="p-6 max-w-[500px] mx-auto">
      {/* image contaiber */}
      <div className=" flex justify-center mt-8 relative md:mt-4">
        <div className="flex flex-col space-y-6 items-center">
          <div className="img-container">
            <img
              id="profile__img"
              className="h-24 w-24 rounded-full"
              src="/images/IMG_20210520_151014_963.jpg"
              alt="profile picture"
            />
            <img className="camera" src="/images/Photo-Icon.png" alt="" />
          </div>
          <p id="twitter" className="text-xl font-bold">
            Chinonso Nwajagu
          </p>
        </div>
        <p id="slack" className="text-xl font-bold hidden">
          Chinonso Nwajagu
        </p>
        {/* Share Icon */}
        <div className="shareFull absolute md:right-[-40%] lg:[-120%]  md:top-[-14px] ">
          <p className="sharelink">Share Link</p>
          <img
            className="arrowShare"
            src="/images/_Avatar share button full.png"
            alt=""
          />
          <img
            className="dotShare"
            src="/images/_Avatar share button.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
