import "./style.css";
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";

import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 760 ? true : false;
  return (
    <div className="hero" id="hero">
      {/* blur */}
      <div className="blur blur-hero"></div>
      {/* left hero section */}
      <div className="left-h">
        {/* header */}
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "100px" : "120px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>PROFESSIONAL TRAINING</span>
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

        {/* hero buttons */}
        <div className="hero-btn">
          <button className="btn">Get Started</button>
        </div>
      </div>

      {/* right side */}
      <div className="right-h">
        <button className="btn btn-h">Join Now</button>

        {/* hero image */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
      </div>
    </div>
  );
};

export default Hero;
