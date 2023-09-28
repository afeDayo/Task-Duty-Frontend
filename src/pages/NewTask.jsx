import React, { useState } from "react";
import newTaskArr from "../assets/images/newtaskwitharrow.png";
import arrowD from "../assets/images/Vector.png";
import tt from "../assets/images/tt.png";
import dd from "../assets/images/Description.png";
import urgent from "../assets/images/Frame 10.png";
import important from "../assets/images/Frame 11.png";
import tag from "../assets/images/Tags.png";
import doneBut from "../assets/images/Frame 4 (1).png";
import { Link, useNavigate } from "react-router-dom";
import Dropdown1 from "../components/Dropdown1";
import toast from "react-hot-toast";

const NewTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setSending(true);
    event.preventDefault();

    const fromData = {
      title,
      description,
      tag,
    };

    //from postman
    const optionsObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    };

    // const res = await fetch(
    //   "http://localhost:3000/api/task/create",
    //   optionsObject
    // );

    const res = await fetch(`${baseURL}/api/task/create`, optionsObject);

    const data = await res.json();

    console.log(data);

    if (res.status === 400) {
      toast.error(data.message);
      setSending(false);
      return;
    }
    toast.success(data.message);
    setSending(false);
    navigate("/tasks");

    // if (res.status === 201) {
    //   toast.success(data.message)
    // }
  };

  return (
    <div className="container">
      <div className="text-start new-t">
        <Link to="/tasks">
          <img src={newTaskArr} alt="" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="container text-start">
        <div className="title position-relative">
          <input
            className="w-100 py-4 px-5 rounded-2 "
            type="text"
            placeholder="E.g Project Defense, Assignment..."
            // value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <div className="tt">
            <img src={tt} alt="" />
          </div>
        </div>
        <div className="description position-relative">
          <textarea
            name=""
            id=""
            cols=""
            rows="10"
            // value={description}
            placeholder="Briefly describe your task..."
            className="px-5 pt-4 rounded-2 dd w-100"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
          <div className="dd">
            <img src={dd} alt="" />
          </div>
        </div>

        <Dropdown1 setTag={setTag} />

        <button disabled={sending} className="text-center done border-0">
          <img src={doneBut} alt="" />
        </button>
      </form>
      <div className="mt-5 mb-5 text-center">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default NewTask;
