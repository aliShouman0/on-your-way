import React from "react";
import Switch from "react-switch";
import { BASE_STORAGE } from "../../constants/constants";

import colors from "../../constants/colors";

function UserTable({ onImageId, onVerified, data }) {
  return (
    <div className="overflow-x-auto relative w-full  ">
      <table className="w-full text-sm text-center text-white  bg-transparent  ">
        <thead className="text-sm text-white font-extrabold uppercase bg-transparent ">
          <tr>
            <th scope="col" className="py-3  "></th>
            <th scope="col" className="py-3 px-3">
              Name
            </th>
            <th scope="col" className="py-3 px-3">
              Email
            </th>
            <th scope="col" className="py-3 px-3">
              Phone
            </th>
            <th scope="col" className="py-3 px-3">
              Address
            </th>
            <th scope="col" className="py-3 px-3">
              Rate
            </th>
            <th scope="col" className="py-3 px-3 ">
              ID
            </th>
            <th scope="col" className="py-3  ">
              Verified
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr className="bg-transparent text-sm" key={data.id}>
              <td className="py-4 ">
                <div className="w-12 h-12  rounded-full">
                  <img
                    src={`${BASE_STORAGE}/${data.avatar}`}
                    className="rounded-full w-12 h-12  "
                    alt="userImage"
                  />
                </div>
              </td>
              <td className="py-4 px-3">{data.name}</td>
              <td className="py-4 px-3">{data.email}</td>
              <td className="py-4 px-3">{data.phone}</td>
              <td className="py-4 px-3">{data.address}</td>
              <td className="py-4 px-3">{data.order_count!==0? (data.rate/data.order_count).toFixed(2):0}</td>
              <td className="py-4 px-3   ">
                <div
                  className="w-12 h-12 "
                  onClick={() => onImageId(data.id)}
                >
                  <img
                    src={`${BASE_STORAGE}/${data.front_id_photo}`}
                    alt="userImage" 
                  />
                </div>
              </td>
              <td className="py-4 ">
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
