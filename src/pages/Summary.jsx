import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Summary = () => {
  return (
    <div className="w-full h-screen bg-[#0B0B0B] p-20">
      <div className="block h-full rounded-[40px] border border-[#7496C1] px-24 py-12">
        <p className="text-white text-2xl pb-2">GPS Summary</p>
        <div className="w-full flex justify-between pb-12">
          <div className="w-56 rounded-3xl py-3 bg-[#34344D] flex">
            <MagnifyingGlassIcon className="w-4 h-4 mx-4 text-slate-400" />
            <input
              placeholder="Search by ID or Type"
              className="focus:outline-none bg-[#34344D] text-xs text-white"
            ></input>
          </div>
          <div className="flex">
            <ChevronLeftIcon className="w-6 h-6 mx-4 text-[#34344D]" />
            <p className="text-white text-sm">
              1 <span className="text-[#34344D]">of 5</span>
            </p>
            <ChevronRightIcon className="w-6 h-6 mx-4 text-[#7496C1]" />
          </div>
        </div>
        <table className="w-full text-center text-sm">
          <thead className="border-b border-[#7496C1] text-[#54526A]">
            <tr>
              <td>Device ID</td>
              <td>Device Type</td>
              <td>Time Stamp</td>
              <td>Location</td>
              <td>Detail</td>
            </tr>
          </thead>
          <tbody className="border-b border-white text-white ">
            <tr className="">
              <td>contoh</td>
              <td>contoh</td>
              <td>contoh</td>
              <td>contoh</td>
              <td>contoh</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Summary;
