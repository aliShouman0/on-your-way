import React from "react";
import Switch from "react-switch";

import colors from "../../constants/colors";

function UserTable({ onImageId, onVerified, data }) {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-center text-white  bg-transparent">
        <thead className="text-sm text-white  uppercase bg-transparent ">
          <tr>
            <th scope="col" className="py-3 px-4"></th>
            <th scope="col" className="py-3 px-4">
              Name
            </th>
            <th scope="col" className="py-3 px-4">
              Email
            </th>
            <th scope="col" className="py-3 px-4">
              Phone
            </th>
            <th scope="col" className="py-3 px-4">
              Address
            </th>
            <th scope="col" className="py-3 px-4">
              Birthday
            </th>
            <th scope="col" className="py-3 px-4">
              Rate
            </th>
            <th scope="col" className="py-3 px-4">
              ID
            </th>
            <th scope="col" className="py-3 px-4">
              Verified
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default UserTable;
