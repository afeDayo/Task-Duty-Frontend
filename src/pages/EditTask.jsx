import React, { useEffect } from "react";
import editArr from "../assets/Personal Tasks/Eddy.png";
import tt from "../assets/Personal Tasks/tt.png";
import dd from "../assets/Personal Tasks/Description.png";
import urgent from "../assets/Personal Tasks/Frame 10.png";
import important from "../assets/Personal Tasks/Frame 11.png";
import tags from "../assets/Personal Tasks/Tags.png";
import doneBut from "../assets/Personal Tasks/Frame 4 (1).png";
import arrowD from "../assets/Personal Tasks/Vector.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Dropdown1 from "../components/Dropdown1";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const EditTask = ({ baseURL }) => {
  const { id } = useParams();
  console.log(id);

  // const { data, loading, error } = useFetch(
  //   `http://localhost:3000/api/task/${id}`
  // );

  const { data, loading, error } = useFetch(`${baseURL}/api/task/${id}`);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

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
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    };

    // const res = await fetch(
    //   `http://localhost:3000/api/task/${id}`,
    //   optionsObject
    // );

    const res = await fetch(`${baseURL}/api/task/${id}`, optionsObject);

    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      navigate("/tasks");
      return;
    }

    toast.error("Something went wrong");
  };

  return (
    <div className="container">
      <div className="text-start new-t">
        <Link to="/new">
          <img src={editArr} alt="" />
        </Link>
      </div>
      <div className="container text-start">
        <form onSubmit={handleSubmit} className="container text-start">
          <div className="title position-relative">
            <input
              className="w-100 py-4 px-5 rounded-2 "
              type="text"
              placeholder="E.g Project Defense, Assignment..."
              value={title}
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
              value={description}
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
      </div>
      <div className="mt-5 mb-5 text-center">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default EditTask;
