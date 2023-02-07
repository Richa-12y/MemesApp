import React, { createRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Text from "../../comoponents/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import "./edit.css";
import Footer from "../footer/Footer";

const Edit = () => {
  const [params] = useSearchParams();
  console.log(params.get("url"));
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };
  const navigate = useNavigate();

  const memeRef = createRef();
  return (
    <>
      <div className="meme-container">
        <div className="meme-container-inside" ref={memeRef}>
          <img src={params.get("url")} alt="meme" width="200px" />
          {Array(count)
            .fill(0)
            .map((el) => (
              <Text />
            ))}
        </div>
        <div className="button-group-container">
          <button className="button-primary" onClick={addText}>
            Add Text
          </button>
          <button
            className="button-secondery"
            onClick={(e) => exportComponentAsJPEG(memeRef)}
          >
            Save
          </button>
          <button className="button-back" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
