import React, { useState } from "react";
import urgent from "../assets/Personal Tasks/Frame 10.png";
import important from "../assets/Personal Tasks/Frame 11.png";

const Dropdown1 = ({ setTag }) => {
  const [options, setOptions] = useState(["urgent", "important"]);
  const [selected, setSelected] = useState("urgent");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <p
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selected}
      </p>
      <div>
        {isOpen
          ? options.map((option) => {
              return (
                <p
                  onClick={() => {
                    setSelected(option);
                    setTag(option);
                    setIsOpen(false);
                  }}
                  key={option}
                >
                  {option}
                </p>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Dropdown1;
