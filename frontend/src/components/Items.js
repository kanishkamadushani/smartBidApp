import React, { useEffect, useState } from "react";
import Item from "./Item";

const Items = () => {
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
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
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
  );
};

export default Items;
