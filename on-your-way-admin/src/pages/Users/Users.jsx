import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import user from "../../assets/user.png";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import UserTable from "../../components/UserTable/UserTable";
import ViewId from "../../components/ViewId/ViewId";
import { getAllUsers, searchUser, setVerifiedUser } from "../../config/axios";
import { BASE_STORAGE } from "../../constants/constants";

function Users() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState(1);

  const [data, setData] = useState([]);
  const {
    isLoading,
    data: result,
    isError,
    refetch,
  } = useQuery(["usersInfo"], getAllUsers);

  const {
    mutate: mutateVerifiedUser,
    isError: verifiedUserIsError,
    isLoading: verifiedUserIsLoading,
    data: verifiedUserResult,
  } = useMutation(setVerifiedUser);

  const {
    isLoading: searchUserIsLoad,
    data: searchUserResult,
    isError: searchUserIsError,
    refetch: searchUserRefetch,
  } = useQuery(["searchUser"], () => searchUser(search), {
    enabled: false,
  });

  useEffect(() => {
    if (searchUserResult && searchUserResult.status === 200) {
      if (searchUserResult.data.status === 1) {
        setData(searchUserResult.data.data);
        setError(false);
      } else setError(true);
    } else if (!searchUserIsLoad) setError(true);
    if (searchUserResult === 401) {
      navigate("/login");
      return;
    }
  }, [searchUserResult]);

  useEffect(() => {
    if (result && result.status === 200) {
      if (result.data.status === 1) {
        setData(result.data.data);
        setError(false);
      } else setError(true);
    } else if (!isLoading) setError(true);
    if (result === 401) {
      navigate("/login");
      return;
    }
  }, [result]);


  return (
    <div className=" w-full h-screen bg-dark   overflow-x-hidden ">
      <Navbar error={isError || verifiedUserIsError || error} />
      <LeftPanel active={"users"} />
      {openPopUp === -1 && popUpData && (
        <ViewId
          frontImage={BASE_STORAGE + "/" + popUpData.front_id_photo}
          backImage={BASE_STORAGE + "/" + popUpData.back_id_photo}
          close={() => setOpenPopUp(0)}
        />
      )}
      <section className="absolute top-[10%] right-0 h-auto w-3/4 p-5 flex flex-col bg-dark  ">
        <div className="flex justify-between mt-5 items-center">
          <p className="text-white text-4xl  font-bold text-left">Users</p>
          <Search value={search} setValue={setSearch} placeholder="Search" />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          {isLoading || verifiedUserIsLoading ? (
            <Loading small={true} />
          ) : (
            <UserTable
              data={data}
              onVerified={(checked, id) => {
                const newData = new FormData();
                newData.append("id", id);
                newData.append("is_verified", checked ? 1 : 0);
                mutateVerifiedUser(newData);
              }}
              onImageId={setOpenPopUp}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default Users;
