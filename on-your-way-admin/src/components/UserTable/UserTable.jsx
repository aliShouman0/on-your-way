import React from "react";
import Switch from "react-switch";
import { BASE_STORAGE } from "../../constants/constants";

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
            <tr className="bg-transparent text-xs" key={data.id}>
              <td className="py-4 px-4">
                <div className="w-12 h-1/4  ">
                  <img
                    src={`${BASE_STORAGE}/${data.avatar}`}
                    className="rounded-full"
                    alt="userImage"
                  />
                </div>
              </td>
              <td className="py-4 px-4">{data.name}</td>
              <td className="py-4 px-4">{data.email}</td>
              <td className="py-4 px-4">{data.phone}</td>
              <td className="py-4 px-4">{data.address}</td>
              <td className="py-4 px-4">{data.order_count!==0? (data.rate/data.order_count).toFixed(2):0}</td>
              <td className="py-4 px-4">
                <div
                  className="w-12 h-1/4  "
                  onClick={() => onImageId(data.id)}
                >
                  <img
                    src={`${BASE_STORAGE}/${data.front_id_photo}`}
                    alt="userImage"
                  />
                </div>
              </td>
              <td className="py-4 px-4">
                <Switch
                  id={`${data.id}`}
                  onChange={(checked, event, id) => onVerified(checked, id)}
                  checked={data.is_verified ? true : false}
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
