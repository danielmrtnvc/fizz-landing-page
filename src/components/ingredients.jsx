import React from "react";
import Heading from "./heading";

export const Ingredients = (props) => {
  return (
    <section className="container">
      <Heading
        title="Made with two simple ingredients."
        description="Detox, hydrate, and refresh with Blush."
      />

      <div className="ingredients">
        {props.data
          ? props.data.map((item, index) => (
              <div key={`${item.title}-${index}`} className="ingredient">
                <div className="ingredient-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <h3 className="ingredient-title">{item.title}</h3>
              </div>
            ))
          : "Loading..."}
      </div>
    </section>
  );
};
