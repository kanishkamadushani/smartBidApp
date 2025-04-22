import React, { useState } from "react";
//import axios from "axios"; // Import axios for API calls
import { useAuthContext } from "../hooks/useAuthContext";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronics");
  const [amount, setAmount] = useState("");
  const [img, setImg] = useState(""); // State for img file

  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useAuthContext();

  const categories = ["electronics", "vehicles", "furniture"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    //Making the object
    const item = {
      name,
      description,
      category,
      amount,
      img,
      email: user.email,
    };

    setErrorMsg("");
    setMessage("");

    try {
      // Make a POST request to the API endpoint (change the URL if needed)

      const response = await fetch("/api/item/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const json = await response.json();

      // Handle the API response
      if (!response.ok) {
        setMessage("Item created successfully!");
        console.log("no");
      }

      if (response.ok) {
        console.log("ok");
      }
    } catch (error) {
      setErrorMsg("Error connecting to the server.");
      console.error("API Error:", error);
    }

    // Reset loader and form
    setLoader(false);
    setName("");
    setDescription("");
    setCategory("electronics");
    setAmount("");
    setImg(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="border p-4 rounded">
          <h2>Create Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Starting Amount</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImg(e.target.value)} // Handle img file
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loader}>
              {loader ? "Saving..." : "Create Item"}
            </button>
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
            {message && <p className="text-success">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
