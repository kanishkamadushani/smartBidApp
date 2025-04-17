import React, { useEffect, useState } from "react";
import Item from "./Item";

const MyItems = () => {
  //define states
  const [items, setItems] = useState([]);

  //Once Page load
  useEffect(() => {
    //API request
    const getItems = async () => {
      try {
        const response = await fetch("/api/item/all");
        const json = await response.json();

        if (response.ok) {
          setItems(json);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getItems();
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {items &&
            items.map((item) => (
              <Item
                key={item._id}
                name={item.name}
                category={item.category}
                amount={item.amount}
                description={item.description}
                img={item.img}
                id={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
