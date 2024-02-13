import React, { useState } from "react";
import Table from "../../Components/Table/Table";

const Products = () => {
  const [products_list, setProducts_list] = useState([
    {
      id: 1,
      name: "Web Template",
      price: 4000,
      quantity: 1,
      isStock: "true",
      ratings: 4,
    },
    {
      id: 2,
      name: "Web Template",
      price: 4000,
      quantity: 1,
      isStock: "false",
      ratings: 4,
    },
    {
      id: 3,
      name: "Web Template",
      price: 4000,
      quantity: 1,
      isStock: "true",
      ratings: 4,
    },
    {
      id: 4,
      name: "Web Template",
      price: 4000,
      quantity: 1,
      isStock: "false",
      ratings: 4,
    },
    {
      id: 5,
      name: "Web Template",
      price: 4000,
      quantity: 1,
      isStock: "true",
      ratings: 4,
    },
    {
      id: 6,
      name: "Web Template",
      price: 4000,
      quantity: 1,
      isStock: "true",
      ratings: 4,
    },
  ]);

  return (
    <div>
      <Table data={products_list} />
    </div>
  );
};

export default Products;
