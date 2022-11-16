import React, { useState } from "react";

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
  const [load, setLoad] = useState(false);

  if (load) {
    return <Loading />;
  }

  return (
    <div
      className={`bg-primary h-screen w-screen overflow-hidden flex flex-col items-center justify-center`}
    >
      <div className="w-1/6 h-1/6 mb-16">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Login;
