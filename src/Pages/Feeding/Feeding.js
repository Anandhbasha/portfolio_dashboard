import React, { useState } from "react";
import Table from "../../Components/Table/Table";
import "./Feeding.css";

const Feeding = () => {
  const [feedingInputs, setFeedingInputs] = useState({
    title: "",
    description: "",
    price: "",
    link: "",
    category: "",
    zipfile: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setFeedingInputs({ ...feedingInputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedingInputs);
  };

  return (
    <div className="feeds">
      <h1>Feeding</h1>
      <div class="container">
        <form id="form" class="form" onSubmit={handleSubmit}>
          <div class="form-control">
            <label for="username">Product name</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Product Name"
              name="title"
              onChange={handleChange}
              value={feedingInputs.title}
            />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="Price">Price</label>
            <input
              type="text"
              id="Price"
              placeholder="Enter Price"
              name="price"
              onChange={handleChange}
              value={feedingInputs.price}
            />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="Description">Description</label>
            <textarea
              type="text-area"
              id="Description"
              placeholder="Enter Description"
              name="description"
              onChange={handleChange}
              value={feedingInputs.description}
            />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="avatar">Category</label>
            <input
              type="text"
              id="category"
              placeholder="Enter category"
              name="category"
              onChange={handleChange}
              value={feedingInputs.category}
            />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="avatar">Add Product</label>
            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              name="zipfile"
            />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="link">Add Link</label>
            <input
              type="text"
              id="link"
              placeholder="Enter your Link"
              name="link"
              onChange={handleChange}
              value={feedingInputs.link}
            />
            <small>Error message</small>
          </div>
          <input type="submit" value={"Submit"} />
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default Feeding;
