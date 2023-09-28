import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Personal Tasks/Group 2.png";
import newTask from "../assets/Personal Tasks/New Task.png";
import allTask from "../assets/Personal Tasks/All Tasks.png";
import profile from "../assets/Personal Tasks/Group 6.png";

const NavBar1 = () => {
  return (
    <div className="nav">
      <div className="nav-bar d-flex justify-content-between align-items-center container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="d-flex gap-5 align-items-center">
          <Link to="/new">
            <img className="new-task" src={newTask} alt="" />
          </Link>
          <Link to="/tasks">
            <img className="all-task" src={allTask} alt="" />
          </Link>

          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar1;