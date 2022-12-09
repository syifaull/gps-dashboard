import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    Cookies.remove("token");
    alert("berhasil logout");
    navigate("/");
  };

  return (
    <>
      <button
        className="bg-[#7496C1] px-3 mb-3 text-white rounded-lg text-xs"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
