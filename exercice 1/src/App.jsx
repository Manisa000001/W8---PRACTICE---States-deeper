import React from "react";
import  { useState } from "react";

export default function App() {
  const [score,getScore]=useState(0);
  const getScoreBarStyle = () => {

    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`;


    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (score >=7){
      scoreColor = "green";
    } else if (score >= 4){
      scoreColor = "lightgreen";
    } else {
      scoreColor = "orange";
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height :"100%",
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={(e) => getScore(parseInt(e.target.value))}></input>

        <div className="score-bar" style={{border:"1px solid #ccc", width:"100%", }}>
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
