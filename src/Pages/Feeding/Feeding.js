import React, { useState } from "react";
import Table from "../../Components/Table/Table";
import "./Feeding.css";
import axios from "axios";
import { backendapi } from "../../App";

const Feeding = () => {
  const [feedingInputs, setFeedingInputs] = useState({
    title: "",
    description: "",
    price: "",
    link: "",
    category: "",
  });
  const [imageUpload, setImageUpload] = useState();
  const [zipUpload, setZipUpload] = useState();

  const handleImageUpload = (e) => {
    let file = e.target.files[0];

    // setImageUpload(URL.createObjectURL(file));
    setImageUpload(file);
  };

  const handlezipUpload = (e) => {
    let file = e.target.files[0];

    // setZipUpload(URL.createObjectURL(file));
    setZipUpload(file);
  };

  const handleChange = ({ target: { value, name } }) => {
    setFeedingInputs({ ...feedingInputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { title, description, price, link, category } = feedingInputs;

      if (imageUpload && zipUpload) {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        const postData = await axios.post(
          `${backendapi}/products`,
          {
            title,
            description,
            price,
            link,
            category,
            zipfile: zipUpload,
            pro_image: imageUpload,
          },
          config
        );

        console.log(postData);

        console.log(feedingInputs, imageUpload, zipUpload);
      } else {
        alert("Please upload the files");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="feeds">
      <h1>Add New file</h1>
      <div class="container">
        <form id="form" className="form" onSubmit={handleSubmit}>
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
          </div>
          <div class="form-control">
            <label for="category">Category</label>
            <input
              type="text"
              id="category"
              placeholder="Enter category"
              name="category"
              onChange={handleChange}
              value={feedingInputs.category}
            />
          </div>
          <div class="form-control">
            <label for="avatar">Add Image</label>
            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              name="avatar"
              onChange={handleImageUpload}
            />
          </div>
          <div class="form-control">
            <label for="zipfile">Add Zip</label>
            <input
              type="file"
              id="zipfile"
              name="zipfile"
              accept=".zip,.rar,.7zip"
              onChange={handlezipUpload}
            />
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
          </div>
          <input type="submit" value={"Submit"} className="submit_btn" />
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default Feeding;
