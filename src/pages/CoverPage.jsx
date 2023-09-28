import React from "react";
import topic from "../assets/Personal Tasks/Manage your Tasks on TaskDuty.png";
import lorem from "../assets/Personal Tasks/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor.png";
import { Link } from "react-router-dom";
import taskButton from "../assets/Personal Tasks/Frame 2.png";
import homeImg from "../assets/Personal Tasks/Component 1.png";

const CoverPage = () => {
  return (
    <div className="d-flex container align-items-center justify-content-between">
      <div className="topic d-flex flex-column align-items-start homeall">
        <img src={topic} alt="" />
        <img className="lorem" src={lorem} alt="" />
        <Link to="/tasks">
          <img className="frame" src={taskButton} alt="" />
        </Link>
      </div>
      <div className="homeimg">
        <img className="illu" src={homeImg} alt="" />
      </div>
    </div>
  );
};

export default CoverPage;
