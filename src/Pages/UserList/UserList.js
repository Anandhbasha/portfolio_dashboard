import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import axios from "axios";

const UserList = () => {
  const [user_li, setUser_list] = useState([{}]);

  useEffect(() => {
    const get_userdata = async () => {
      const { data } = await axios.get(`http://localhost:3001/users`);
      setUser_list(data?.data);
    };

    get_userdata();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <Table data={user_li} />
    </div>
  );
};

export default UserList;

// [
//   {
//     id: 1,
//     name: "Anandh",
//     Email: "anandh@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Anandh",
//     Email: "anandh@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Anandh",
//     Email: "anandh@gmail.com",
//     Age: 23,
//   },
//   {
//     id: 4,
//     name: "Anandh",
//     Email: "anandh@gmail.com",
//   },
//   {
//     id: 5,
//     name: "Anandh",
//     Email: "anandh@gmail.com",
//   },
//   {
//     id: 6,
//     name: "Anandh",
//     Email: "anandh@gmail.com",
//   },
// ]
