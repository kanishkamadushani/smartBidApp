import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    //Api request
    const getItem = async () => {
      try {
        const response = await fetch(`/api/item/${id}`);
        const json = await response.json();

        if (response.ok) {
          setItem(json);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getItem();
  }, []);

  return (
    <div>
      {item && (
        <div className="card mb-3">
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.amount}</p>
            <p className="card-text">{item.user_id}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
