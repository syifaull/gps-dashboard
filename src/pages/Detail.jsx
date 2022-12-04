import React, { useState } from "react";
import PieChart from "../components/PieChart";

const Detail = () => {
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        // borderColor: "black",
        // borderWidth: 2,
      },
    ],
  });

  return (
    <div className="w-full h-screen bg-[#0B0B0B] p-20">
      <div className="block h-full rounded-[40px] border border-[#7496C1] px-24 py-12">
        <div>
          <p className="text-white text-4xl">D-1567</p>
          <p className="text-white text-3xl">Aircraft</p>
          <div className="flex pt-9">
            <div className="border rounded-2xl border-[#54526A] w-1/3">
              <table className=" w-full text-[#54526A] text-sm ">
                <thead className="border-b border-[#54526A] ">
                  <tr>
                    <td className="border-r border-[#54526A]">Time Stamp</td>
                    <td>Location</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-[#54526A]">satu</td>
                    <td>dua</td>
                  </tr>
                  <tr>
                    <td className="border-r border-[#54526A]">dua</td>
                    <td>satu</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border rounded border-[#54526A]">
              <PieChart chartData={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
