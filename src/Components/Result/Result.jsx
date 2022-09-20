import React from "react";
import "./Result.css";

function Result({ data }) {
  const dataRes = data.results.map((i) => (
    <div className="box">
      <div id="Result">
        <div className="singleemoji">{i?.emoji}</div>
        <div className="singleResult">{i?.name} </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div>{dataRes}</div>
    </div>
  );
}
export default Result;
