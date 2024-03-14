import "./style.css";
import Youtube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";
import X from "../assets/x.png";
import Logo from "../assets/logo.png";
import Form from "../components/Form";

const Join = () => {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>

        {/* links */}
        <div className="footer">
          <div className="social-links">
            <img src={Youtube} alt="" />
            <img src={Instagram} alt="" />
            <img src={X} alt="" />
          </div>
          <div className="logo-f">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>

      {/* right side */}
      <Form />
    </div>
  );
};

export default Join;
