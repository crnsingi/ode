import "./HomeIcons.css";
import fuel from "../assets/fuel.png";
import battery from "../assets/battery.png";
import oil from "../assets/oil.png";
import wash from "../assets/wash.png";
import tyres from "../assets/tyres.png";
import rescue from "../assets/rescue.png";

const HomeIcons = () => {
  return (
    <div className="icon-container">
      <div className="icon-item">
        <img src={fuel} alt="Fuel" />
        <p>Petrol / Fuel</p>
      </div>

      <div className="icon-item">
        <img src={battery} alt="" />
        <p>Battery</p>
      </div>
      <div className="icon-item">
        <img src={oil} alt="" />
        <p>Oil</p>
      </div>
      <div className="icon-item">
        <img src={wash} alt="" />
        <p>Car Wash</p>
      </div>
      <div className="icon-item">
        <img src={tyres} alt="" />
        <p>Tyres</p>
      </div>
      <div className="icon-item">
        <img src={rescue} alt="" />
        <p>Rescue </p>
      </div>
    </div>
  );
};

export default HomeIcons;
