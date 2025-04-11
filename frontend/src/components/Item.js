import React from "react";

const Item = ({ name, catagery, description, amount, img, id }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src="https://picsum.photos/200"
            alt="Avatar"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="flip-card-back">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{amount}</p>
          <p className="card-text">{catagery}</p>
          <a href={`/item/${id}`} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
