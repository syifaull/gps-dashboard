import React from "react";
import { Link } from "react-router-dom";
import ButtonBlue from "../components/ButtonBlue";
import InputForm from "../components/InputForm";

const Login = () => {
  return (
    <div className="w-full h-screen bg-[#0B0B0B] p-20">
      <div className="block h-full rounded-[40px] border border-[#7496C1]">
        <div className="flex justify-center mt-32">
          <div className="w-80 block">
            <InputForm type="text" placeholder="Email" />
            <InputForm type="password" placeholder="Password" />
            <ButtonBlue title="Login" />
            <Link to="/register">
              <p className="text-white text-xs text-center">New Here?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
