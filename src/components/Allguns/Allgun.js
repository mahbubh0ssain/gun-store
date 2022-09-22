import React, { useEffect, useState } from "react";
import Singlegun from "../Singlegun/Singlegun";
import "./Allgun.css";
const Allgun = ({ increaseCart }) => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
      {guns.map((gun) => (
        <Singlegun gun={gun} key={gun.id} increaseCart={increaseCart} />
      ))}
    </div>
  );
};

export default Allgun;
