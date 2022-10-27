import React from "react";

const Header = () => {
  return (
    <section className="p-6">
      {/* image contaiber */}
      <div className="flex justify-center mx-auto container">
        <img
          id="profile__img"
          className="h-24 w-24 rounded-full"
          src="./images/IMG-1295.jpg"
          alt="profile picture"
        />
      </div>
    </section>
  );
};

export default Header;
