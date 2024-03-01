import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import axios from "axios";
import { backendapi } from "../../App";
import "./Products.css";

const Products = () => {
  const [products_list, setProducts_list] = useState([{}]);
  useEffect(() => {
    const get_productlist = async () => {
      const {
        data: { data },
      } = await axios.get(`${backendapi}/products`);
      // } = await axios.get(`http://localhost:8080/products`);

      setProducts_list(data);
    };

    get_productlist();
  }, []);

  const newData = products_list.map(({ description, ...rest }) => rest);

  return (
    <div className="products">
      <h2>Our Avalible Projects</h2>
      <Table data={newData} />
    </div>
  );
};

export default Products;
