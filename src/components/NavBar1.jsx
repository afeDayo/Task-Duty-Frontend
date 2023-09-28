import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/Group 2.png";
// import newTask from "../assets/images/New Task.png";
// import allTask from "../assets/images/All Tasks.png";
// import profile from "../assets/images/Group 6.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";

// import { Nav, Container, Navbar, NavDropdown} from "react-bootstrap"

const NavBar1 = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    // <div className="nav">
    //   <div className="nav-bar d-flex justify-content-between align-items-center container">
    //     <Link to="/">
    //       <img src={logo} alt="" />
    //     </Link>
    //     <div className="d-flex gap-5 align-items-center">
    //       <Link to="/new">
    //         <img className="new-task" src={newTask} alt="" />
    //       </Link>
    //       <Link to="/tasks">
    //         <img className="all-task" src={allTask} alt="" />
    //       </Link>

    //       <img src={profile} alt="" />
    //     </div>
    //   </div>
    // </div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">TaskDuty</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-lg-grow-0">
          <Nav className="me-auto">
            {location.pathname === "/tasks" ? null : (
              <Link to="/tasks">All Task</Link>
            )}
            {location.pathname === "/new" ? null : (
              <Link to="/new">New Task</Link>
            )}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar1;
