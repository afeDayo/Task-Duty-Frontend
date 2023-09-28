import React from "react";
import myTask from "../assets/images/My Tasks.png";
import addTask from "../assets/images/Group 12.png";
import editbut from "../assets/images/Frame 4.png";
import deletebut from "../assets/images/Frame 5.png";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const MyTask = ({ baseURL }) => {
  // const { data, loading, error } = useFetch("http://localhost:3000/api/task");
  const { data, loading, error } = useFetch(`${baseURL}/api/task`);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const optionsObject = {
      method: "DELETE",
    };

    // const res = await fetch(
    //   `http://localhost:3000/api/task/${id}`,
    //   optionsObject
    // );

    const res = await fetch(`${baseURL}/api/task/${id}`, optionsObject);

    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      setTimeout(() => {
        navigate(0);
      }, 1000);
      return;
    }

    toast.error("Something went wrong");
  };

  return (
    <div className="container">
      <div className="my-task d-flex justify-content-between align-items-center">
        <img src={myTask} alt="" />
        <Link to="/new">
          <img src={addTask} alt="" />
        </Link>
      </div>
      <div>
        {data
          ? data.map((datum) => (
              <div key={datum._id} className="eachT">
                <div className="d-flex justify-content-between align-items-end mt-3 mx-3">
                  <p className="m-0 urg">{datum.tag}</p>
                  <div className="d-flex gap-4">
                    <Link to={`/edit/${datum._id}`}>
                      <img src={editbut} alt="" />
                    </Link>
                    <button
                      className="border-0"
                      onClick={() => {
                        handleDelete(datum._id);
                      }}
                    >
                      <img src={deletebut} alt="" />
                    </button>
                  </div>
                </div>
                <hr className="mx-3" />
                <div className="text-start mx-3">
                  <h3>{datum.title}</h3>
                  <p>{datum.description}</p>
                </div>
              </div>
            ))
          : null}

        {loading ? <p>Loading... 💕</p> : null}
        {error ? <p>{error}</p> : null}
        <div className="mt-5 mb-5">
          <a href="#">Back To Top</a>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
