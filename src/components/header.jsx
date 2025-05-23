import videoBg from "../assets/naturalfizz-intro-vid.mp4";

export const Header = (props) => {
  return (
    <header>
      <video src={videoBg} autoPlay loop muted />
      <p>{props.data ? props.data.paragraph : "Loading"}</p>
    </header>
  );
};
