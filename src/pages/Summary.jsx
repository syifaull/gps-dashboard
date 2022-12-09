import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentMagnifyingGlassIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout";

const Summary = () => {
  const [getGPS, setGetGPS] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleGetGPS = async () => {
    await axios
      .get(process.env.REACT_APP_BASE_URL + "api", {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })

      .then((result) => {
        setGetGPS(result.data);
      })
      .catch((err) => {
        alert("error");
      });
  };

  const handleDetail = (item) => {
    navigate("/detail", {
      state: {
        device_id: item.device_id,
        device_type: item.device_type,
      },
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getGPS.slice(indexOfFirstPost, indexOfLastPost);
  const maxPage = Math.ceil(getGPS.length / postsPerPage);

  const handleNext = () => {
    setCurrentPage(currentPage === maxPage ? currentPage : currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  useEffect(() => {
    handleGetGPS();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0B0B0B] p-20">
      <div className="block h-full rounded-[40px] border border-[#7496C1] px-24 py-12">
        <div className="flex justify-between">
          <p className="text-white text-2xl pb-2">GPS Summary</p>
          <Logout />
        </div>
        <div className="w-full flex justify-between pb-12">
          <div className="w-56 rounded-3xl py-3 bg-[#34344D] flex">
            <MagnifyingGlassIcon className="w-4 h-4 mx-4 text-slate-400" />
            <input
              placeholder="Search by ID or Type"
              className="focus:outline-none bg-[#34344D] text-xs text-white"
            ></input>
          </div>
          <div className="flex">
            <ChevronLeftIcon
              className={
                currentPage === 1
                  ? "w-6 h-6 mx-4 text-[#34344D]"
                  : "w-6 h-6 mx-4 text-[#7496C1]"
              }
              onClick={handlePrevious}
            />
            <p className="text-white text-sm">
              {currentPage} <span className="text-[#34344D]">of {maxPage}</span>
            </p>
            <ChevronRightIcon
              className={
                currentPage === maxPage
                  ? "w-6 h-6 mx-4 text-[#34344D]"
                  : "w-6 h-6 mx-4 text-[#7496C1]"
              }
              onClick={handleNext}
            />
          </div>
        </div>
        <table className="w-full text-center text-sm">
          <thead className="border-b border-[#7496C1] text-[#54526A]">
            <tr>
              <td>Device ID</td>
              <td>Device Type</td>
              <td>Latest Time Stamp</td>
              <td>Latest Location</td>
              <td>Detail</td>
            </tr>
          </thead>
          {currentPosts.map((item, index) => {
            return (
              <tbody className="border-b border-white text-white " key={index}>
                <tr>
                  <td>{item.device_id}</td>
                  <td>{item.device_type}</td>
                  <td>
                    {new Date(`${item.timestamp}`).toLocaleString("ID-id")}
                  </td>
                  <td>{item.location}</td>
                  <td>
                    <DocumentMagnifyingGlassIcon
                      className="w-5 h-5 text-white"
                      onClick={() => handleDetail(item)}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Summary;
