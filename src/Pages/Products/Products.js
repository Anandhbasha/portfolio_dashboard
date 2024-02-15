import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import axios from "axios";
import { backendapi } from "../../App";

const Products = () => {
  const [products_list, setProducts_list] = useState([{}]);
  useEffect(() => {
    const get_productlist = async () => {
      const {
        data: { data },
      } = await axios.get(`${backendapi}/products`);

      setProducts_list(data);
    };

    get_productlist();
  }, []);
  return (
    <div>
      <Table data={products_list} />
    </div>
  );
};

export default Products;
