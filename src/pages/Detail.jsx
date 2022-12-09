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

  // const newArray = [
  //   { name: "L1", sum: 4 },
  //   { name: "L2", sum: 1 },
  // ];

  let array = [];
  for (let i = 0; i < getDetail.length; i++) {
    let count = 0;

    for (let j = 0; j < getDetail.length; j++) {
      if (getDetail[i].location === getDetail[j].location && i > j) {
        break;
      }
      if (getDetail[i].location === getDetail[j].location) {
        count++;
      }
    }
    if (count > 0) {
      array.push({ name: getDetail[i].location, sum: count });
      //setNewArray({ name: getDetail[i].location, sum: count });
    }
  }

  const newArray = array;
  //const [newArray] = useState(array);

  console.log(newArray);
  // console.log(getDetail);

  const [chartData, setChartData] = useState({
    labels: newArray.map((data) => data.name),
    datasets: [
      {
        label: "Users Gained ",
        data: newArray.map((data) => data.sum),
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
  console.log(chartData);

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
