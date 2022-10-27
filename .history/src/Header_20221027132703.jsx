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
              src="/images/Anette-Black.png"
              alt="profile picture"
            />
            <img className="camera" src="/images/Photo-Icon.png" alt="" />
          </div>
          <p id="twitter" className="text-xl font-bold">
            Ian Alex
          </p>
        </div>
        <p id="slack" className="text-xl font-bold hidden">
          Ik-Alex
        </p>
        {/* Share Icon */}
        <div className="hidden shareFull absolute md:right-[-40%] lg:right-[220px] md:top-[-14px] md:block">
          <p className="sharelink">Share Link</p>
          <img src="/images/_Avatar share button full.png" alt="" />
        </div>
      </div>
      {/* mobile image */}
      <div className=" absolute right-[30px] top-[40px]  md:hidden">
        <img src="/images/_Avatar share button.png" alt="" />
      </div>
    </section>
  );
};

export default Header;
