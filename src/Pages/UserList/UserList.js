import React, { useState } from "react";
import Table from "../../Components/Table/Table";

const UserList = () => {
  const [user_li, setUser_list] = useState([
    {
      id: 1,
      name: "Anandh",
      Email: "anandh@gmail.com",
    },
    {
      id: 2,
      name: "Anandh",
      Email: "anandh@gmail.com",
    },
    {
      id: 3,
      name: "Anandh",
      Email: "anandh@gmail.com",
      Age: 23,
    },
    {
      id: 4,
      name: "Anandh",
      Email: "anandh@gmail.com",
    },
    {
      id: 5,
      name: "Anandh",
      Email: "anandh@gmail.com",
    },
    {
      id: 6,
      name: "Anandh",
      Email: "anandh@gmail.com",
    },
  ]);
  return (
    <div>
      <h1>User Details</h1>
      <Table data={user_li} />
    </div>
  );
};

export default UserList;
