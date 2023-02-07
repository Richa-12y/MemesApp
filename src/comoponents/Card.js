import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ imageUrl, count, name }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="card">
        <div className="box" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="content">
            <div className="card-background" />
            <h2>{count}</h2>
            <h3>{name}</h3>

            <button onClick={(e) => navigate(`/edit?url=${imageUrl}`)}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
