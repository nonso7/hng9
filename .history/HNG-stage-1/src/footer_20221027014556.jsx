import React from "react";

const Footer = () => {
  return (
    <footer className="px-8 md:px-16 py-8">
      <div className="hidden flex justify-between items-center relative pt-4 px-2 border-t-2 border-darkGrey md:block">
        <div className="">
          <img src="../images/Vector.png" alt="" />
        </div>
        <div className="absolute left-[59px] bottom-1">
          <img src="../images/Vectordot.png" alt="" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
      </div>
    </footer>
  );
};

export default Footer;
