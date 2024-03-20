import "./style.css";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 760 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="hero"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="about"
              span={true}
              smooth={true}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="contact"
              span={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
