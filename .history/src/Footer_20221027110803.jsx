import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto container px-4 py-8 md:px-12">
      <div className="flex flex-col space-y-6 items-start pt-6 px-2 border-t-2 border-darkGrey md:flex-row md:justify-between md:items-center md:space-y-0">
        <div className="relative">
          <div className="">
            <img src="/images/Vector.png" alt="" />
          </div>
          <div className="absolute left-[51px] bottom-1">
            <img src="/images/Vectordot.png" alt="" />
          </div>
        </div>
        <p className="text-lightGrey">HNG Internship 9 Frontend Task</p>
        <div className="">
          <img src="/images/I4G.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
