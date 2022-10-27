import React from "react";

const Footer = () => {
  return (
    <footer className="px-8 md:px-16 py-8">
      <div className="flex justify-between items-center pt-4 px-2 border-t-2 border-darkGrey">
        <div className="relative">
          <div className="">
            <img src="../images/Vector.png" alt="" />
          </div>
          <div className="absolute left-[51px] bottom-1">
            <img src="../images/Vectordot.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
