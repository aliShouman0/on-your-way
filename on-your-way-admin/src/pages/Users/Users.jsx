import React, { useState } from "react";

import user from "../../assets/user.png";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import UserTable from "../../components/UserTable/UserTable";

function Users() {
  const [search, setSearch] = useState("");
  const test = [
    {
      id: "1",
      avatar: user,
      name: "Alex",
      email: "me@",
      phone: "7891423",
      address: "Saida",
      birthday: "3/10/2000",
      rate: "3",
      idImage: user,
      verified: true,
    },
  ];
  return (
    <div className=" w-full h-screen bg-dark   overflow-x-hidden ">
      <Navbar />
      <LeftPanel active={"users"} />
      <section className="absolute top-[10%] right-0 h-auto w-3/4 p-5 flex flex-col bg-dark  ">
        <div className="flex justify-between mt-5 items-center">
          <p className="text-white text-4xl  font-bold text-left">Users</p>
          <Search value={search} setValue={setSearch} placeholder="Search" />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <UserTable
            data={test}
            onVerified={(checked, id) => {
              alert(id, checked);
            }}
            onImageId={(id) => {
              alert(id);
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Users;
