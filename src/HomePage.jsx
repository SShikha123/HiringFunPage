import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
import interview from "./assets/interviewimg.jpg";
function HomePage() {
  const naviagte = useNavigate();
  const [leftposition, setleftposition] = useState(null);
  const [topposition, settopposition] = useState(null);
  const [hover, setHover] = useState(false);

  let lefts = Math.floor(Math.random() * (window.innerWidth - 50));
  let tops = Math.floor(Math.random() * (window.innerHeight - 50));
  console.log(window.innerWidth, window.innerHeight, lefts, tops);
  useEffect(() => {
    setleftposition(lefts);
    settopposition(tops);
  }, [setHover]);

  return (
    <div className="container">
        <h1 style={{ font: "20px" }}>Will you hire me ? </h1>      
      <img
        src={interview}
        alt="interview image"
        style={{ background: "skyblue", marginBottom: "10px" }}
      />
      <div className="buttons">
        <button className="yesbutton" onClick={() => naviagte("/yespage")}>
          Yes
        </button>
        <button
          className="nobutton"
          style={{
            position: "absolute",
            left: hover ? leftposition : lefts,
            top: hover ? topposition : tops,
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default HomePage;
