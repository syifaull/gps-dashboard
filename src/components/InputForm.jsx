import React from "react";

const InputForm = (props) => {
  return (
    <div className="w-80 block">
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="w-full px-5 py-3 mb-6 bg-[#34344D] rounded-[45px] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#9EADCF]"
      />
    </div>
  );
};

export default InputForm;
