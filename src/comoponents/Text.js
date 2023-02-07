import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to Edit Mode");
  console.log(editMode);
  return (
    <Draggable>
      {editMode ? (
        <input
          style={{
            background: "yellow",
            textTransform: "capitalize",
            border: "1px solid black",
          }}
          onDoubleClick={(e) => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1
          style={{
            background: "red",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
          onDoubleClick={(e) => setEditMode(true)}
        >
          {val}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
