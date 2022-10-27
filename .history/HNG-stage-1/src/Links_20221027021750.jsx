import React from "react";
import Data from "./Data";

const Links = () => {
  return (
    <section className="">
      <div className=" container px-16">
        {Data.map((info) => {
          return (
            <a
              key={info.id}
              className="block bg-darkGrey rounded-lg text-center mb-4  py-4 px-6 md:px-8 hover:cursor-pointer "
              href={info.link}
            >
              {info.title}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Links;
