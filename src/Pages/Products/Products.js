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
      // } = await axios.get(`http://localhost:8080/products`);

      setProducts_list(data);
    };

    get_productlist();
  }, []);

  const newData = products_list.map(({ description, ...rest }) => rest);

  return (
    <div>
      <Table data={newData} />
    </div>
  );
};

export default Products;
