import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { getMyInfo, postLogin } from "../../config/axios";
import logo from "../../assets/logo-gold.png";
import { useNavigate } from "react-router-dom";
import InputBox from "../../components/InputBox/InputBox";
import Loading from "../../components/Loading/Loading";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);
  const {
    mutate: mutateLogin,
    isError,
    isLoading,
    error: loginError,
    data: result,
  } = useMutation(postLogin);

  const {
    mutate: mutateMyInfo,
    isError: isErrorGetMyInfo,
    isLoading: isLoadingGetMyInfo,
    error: errorGetMyInfo,
    data: resultGetMyInfo,
  } = useMutation(getMyInfo);

  const submit = async (e) => {
    e.preventDefault();
    setError(false);
    if (!email) {
      setError(true);
      setErrorText("All Inputs are required ");
      return;
    }
    if (!password) {
      setError(true);
      setErrorText("All Inputs are required ");
      return;
    }
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    mutateLogin(data);
  };

  useEffect(() => {
    if (result && result.status === 200) {
      localStorage.setItem("access_token", result.data.access_token);
      mutateMyInfo();
    }
    if (result === 401) {
      setErrorText("Login Failed");
      setError(true);
    }
    if (result === 400 || result === 500) {
      setErrorText("Some Thing is Wrong");
      setError(true);
    }
    if (isError) {
      setErrorText(loginError);
      setError(true);
    }
  }, [result, isError, loginError]);

  if (isLoading || isLoadingGetMyInfo) {
    return <Loading />;
  }

  return (
    <div
      className={`bg-primary h-screen w-screen overflow-hidden flex flex-col items-center justify-center  `}
    >
      <div className="w-1/6 h-1/6 mb-16">
        <img src={logo} alt="Logo" />
      </div>
      <form className=" w-1/3 " onSubmit={(e) => submit(e)}>
        <InputBox
          htmlFor="email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
        <InputBox
          htmlFor="password"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <input
          type={"submit"}
          value="LOGIN"
          className={`text-center text-lg font-bold bg-secondary w-full p-3 mt-4 rounded-full cursor-pointer`}
        />
        {error && (
          <p className="  mt-3 rounded-md text-red-700 animate-pulse">
            *{errorText}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
