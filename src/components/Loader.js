import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div
      style={{
        color: "gold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1b1b32",
        textAlign: "center",
      }}
    >
      <img className="anim" src="./images/loader.svg" alt="" />
    </div>
  );
};

export default Loader;
