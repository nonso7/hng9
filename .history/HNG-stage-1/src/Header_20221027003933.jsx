import React from "react";

const Header = () => {
  return (
    <section className="p-6">
      {/* image contaiber */}
      <div className="flex flex-col space-y-6 items-center mx-auto container">
        <img
          id="profile__img"
          className="h-24 w-24 rounded-full"
          src="../images/Anette-Black.png"
          alt="profile picture"
        />
        <p id="twitter" className="text-xl font-bold">
          Ian Alex
        </p>
        {/* <p id="slack" className="text-xl font-bold">
          Ik-Alex
        </p> */}
      </div>
    </section>
  );
};

export default Header;
