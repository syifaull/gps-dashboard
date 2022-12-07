import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonBlue from "../components/ButtonBlue";
import InputForm from "../components/InputForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await axios
      .post(
        process.env.REACT_APP_BASE_URL + "api/login",
        {},
        {
          auth: {
            username: email,
            password: password,
          },
        }
      )
      .then((response) => {
        alert("berhasil login");
        Cookies.set("token", response.data.response.message.loginToken);
        navigate("/summary");
      })
      .catch((err) => {
        alert("gagal login");
      });
  };

  return (
    <div className="w-full h-screen bg-[#0B0B0B] p-20">
      <div className="block h-full rounded-[40px] border border-[#7496C1]">
        <div className="flex justify-center mt-32">
          <div className="w-80 block">
            <InputForm
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonBlue title="Login" onClick={handleLogin} />
            <p className="text-white text-xs text-center">
              <Link to="/register">New Here?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
