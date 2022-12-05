import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonBlue from "../components/ButtonBlue";
import InputForm from "../components/InputForm";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await axios
      .post(process.env.REACT_APP_BASE_URL + "api/signup", {
        body: {
          name,
          email,
          password,
        },
      })
      .then((response) => {
        alert("berhasil");
      })
      .catch((err) => {
        alert(err.data.response.message);
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
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
            <InputForm
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonBlue title="Register" onCLick={() => handleRegister()} />
            <Link to="/">
              <p className="text-white text-xs text-center">
                Already Have an Account?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
