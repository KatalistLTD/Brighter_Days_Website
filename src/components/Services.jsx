import "./style.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";

const Services = () => {
  return (
    <div className="Programs" id="programs">
      {/* blur */}

      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Services</span>
        <span className="stroke-text">to shape you</span>
      </div>
      {/* program categories */}
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category" key={programsData}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
