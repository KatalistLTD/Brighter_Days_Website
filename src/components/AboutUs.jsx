import "./style.css";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import Logo from "../assets/logo.png";
import tick from "../assets/tick.png";
const AboutUs = () => {
  return (
    <div className="Reasons" id="about">
      {/* left side */}
      <div className="left-r">
        {/* images */}
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      {/* right side */}
      <div className="right-r">
        {/* heading */}
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>
        {/* content */}
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 10+ EXPERT COACH</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>GREAT FITNESS COMMUNITY</span>
          </div>
        </div>
        <br />
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "bold",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          COME AND FEEL THE HIT !!
        </span>
        <div className="logo-r">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
