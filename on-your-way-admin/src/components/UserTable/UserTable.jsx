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
        <tbody>
          {data.map((data, i) => (
            <tr className="bg-transparent " key={data.id}>
              <td className="py-4 px-4">
                <div className="w-12 h-1/4  ">
                  <img src={data.avatar} alt="logo" />
                </div>
              </td>
              <td className="py-4 px-4">{data.name}</td>
              <td className="py-4 px-4">{data.email}</td>
              <td className="py-4 px-4">{data.phone}</td>
              <td className="py-4 px-4">{data.address}</td>
              <td className="py-4 px-4">{data.birthday}</td>
              <td className="py-4 px-4">{data.rate}</td>
              <td className="py-4 px-4">
                <div
                  className="w-12 h-1/4  "
                  onClick={() => onImageId(data.id)}
                >
                  <img src={data.idImage} alt="logo" />
                </div>
              </td>
              <td className="py-4 px-4">
                <Switch
                  id={data.id}
                  onChange={(checked, event, id) => onVerified(checked, id)}
                  checked={data.verified}
                  onColor={colors.secondary}
                  offColor={colors.primary}
                  width={48}
                  height={20}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
