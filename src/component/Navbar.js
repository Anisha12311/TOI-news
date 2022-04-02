import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import Currentnews from "./Currentnews";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <div className={`nav ${show && "nav_black"}`}>
        <h1>TIMES OF INDIA</h1>
        <img className="nav_avatar" src="/images/menu.PNG" alt="Avatar" />
      </div>

      <h1 className="toplines">Top Headlines</h1>
      <div className="ui grid container">
        <Currentnews />
      </div>
    </div>
  );
}
export default Navbar;
