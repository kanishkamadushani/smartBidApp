import React from "react";

const Item = ({ name, catagery, description, amount, img, id }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {name} </h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{amount}</p>
        <p className="card-text">{catagery}</p>
        <a href={`/item/${id}`} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Item;
