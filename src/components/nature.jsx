import Heading from "./heading";

export const Nature = (props) => {
  return (
    <div className="nature-container">
      <Heading title="Sip into Desire." />

      <div className="nature">
        {props.data
          ? props.data.map((item, index) => (
              <div key={`${item.title}-${index}`} className="nature-item">
                <img src={item.img} alt={item.title} />
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};
