import "./style.css";
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* left hero section */}
      <div className="left-h">
        {/* header */}
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness gym Mtaani</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <spa>Ideal Body</spa>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest.
            </span>
          </div>
        </div>

        {/* figure */}
        <div className="figures">
          <div>
            <span>+10</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+500</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* calories */}
      <div className="calories">
        <img src={Calories} alt="" />
        <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </div>

      {/* right side */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        {/* heart rate */}
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero image */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>
    </div>
  );
};

export default Hero;
