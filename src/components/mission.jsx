import Heading from "./heading";

export const Mission = (props) => {
  return (
    <section className="container">
      <Heading
        title="Our Mission"
        description="To inspire a healthier, more vibrant lifestyle by offering natural, fresh, and organic refreshment that empowers you to care for your body and embrace positive change."
      />

      <div className="mission">
        {props.data
          ? props.data.map((item, index) => (
              <div key={`${item.title}-${index}`} className="mission-item">
                <div className="mission-item-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <h3 className="mission-item-title">{item.title}</h3>
              </div>
            ))
          : "Loading..."}
      </div>
    </section>
  );
};
