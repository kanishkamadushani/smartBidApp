import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Grid } from "@mui/material";

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
    <Grid container spacing={2} justifyContent="center">
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
    </Grid>
  );
};

export default Items;
