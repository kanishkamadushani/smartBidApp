import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useAuthContext } from "../hooks/useAuthContext";
import { Grid } from "@mui/material";

const MyItems = () => {
  //user
  const { user } = useAuthContext();
  //define states
  const [items, setItems] = useState([]);

  //Once Page load
  useEffect(() => {
    //API request
    const getItems = async () => {
      try {
        const response = await fetch("/api/item/by_email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        });
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

export default MyItems;
