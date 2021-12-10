import React from "react";

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "600px",
        border: "1px solid black",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
