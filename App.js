import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>something...</h1>
    </div>
  );
};

const title = (
  <h1>
    {elem} Hello.... <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render({ title });
