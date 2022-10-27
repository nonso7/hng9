import React from "react";
import Data from "./Data";

const Links = () => {
  return (
    <section className="mx-auto container p-6">
      {Data.map((info) => {
        return (
          <div
            id={info.title}
            className="bg-darkGrey rounded-lg text-center mb-4  py-4 px-6 md:px-8"
          >
            <a href={info.link}>{info.title}</a>
          </div>
        );
      })}
    </section>
  );
};

export default Links;
