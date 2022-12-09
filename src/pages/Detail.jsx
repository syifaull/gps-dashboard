import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PieChart from "../components/PieChart";

const Detail = () => {
  const [getDetail, setGetDetail] = useState([]);
  const location = useLocation();

  const handleGetDetail = async () => {
    await axios
      .get(process.env.REACT_APP_BASE_URL + `api/${location.state.device_id}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((result) => {
        setGetDetail(result.data);
      })
      .catch((err) => {
        alert("error");
      });
  };

  useEffect(() => {
    handleGetDetail();
  }, []);

  // const Data = [
  //   {
  //     id: 1,
  //     year: 2016,
  //     userGain: 80000,
  //     userLost: 823,
  //   },
  //   {
  //     id: 2,
  //     year: 2017,
  //     userGain: 45677,
  //     userLost: 345,
  //   },
  //   {
  //     id: 3,
  //     year: 2018,
  //     userGain: 78888,
  //     userLost: 555,
  //   },
  //   {
  //     id: 4,
  //     year: 2019,
  //     userGain: 90000,
  //     userLost: 4555,
  //   },
  //   {
  //     id: 5,
  //     year: 2020,
  //     userGain: 4300,
  //     userLost: 234,
  //   },
  // ];

  const [chartData, setChartData] = useState({
    labels: getDetail.map((data) => data.location),
    datasets: [
      {
        label: "Users Gained ",
        data: getDetail.map((data) => data.location),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderWidth: 0,
      },
    ],
  });

  return (
    <div className="w-full h-screen bg-[#0B0B0B] p-20">
      <div className="block h-full rounded-[40px] border border-[#7496C1] px-24 py-12">
        <div>
          <p className="text-white text-4xl">{location.state.device_id}</p>
          <p className="text-white text-3xl">{location.state.device_type}</p>
          <div className="flex pt-9">
            <div className="border rounded-2xl h-min border-[#54526A] w-1/3">
              <table className=" w-full  text-[#54526A] text-sm ">
                <thead className="border-b border-[#54526A] ">
                  <tr>
                    <td className="border-r border-[#54526A]">Time Stamp</td>
                    <td>Location</td>
                  </tr>
                </thead>
                {getDetail.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td className="border-r border-[#54526A]">
                          {new Date(`${item.timestamp}`).toLocaleString(
                            "ID-id"
                          )}
                        </td>
                        <td>{item.location}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <div className="border rounded border-[#54526A]">
              <PieChart chartData={chartData} /> {setChartData}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
