import React from "react";

const ButtonBlue = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="w-full mb-6 h-11 rounded-[45px] text-sm text-[#0B0B0B] bg-[#9EADCF] hover:bg-[#7b87a1] active:bg-[#9EADCF] "
      >
        {props.title}
      </button>
    </div>
  );
};

export default ButtonBlue;
