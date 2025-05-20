import Heading from "./heading";

export const Features = (props) => {
  return (
    <section className="container">
      <Heading title="Our Flavors" />

      <div className="features">
        {props.data
          ? props?.data.map((item, index) => (
              <div key={`${item.title}-${index}`} className="feature">
                <div className="feature-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.text}</p>
              </div>
            ))
          : "Loading..."}
      </div>
    </section>
  );
};
