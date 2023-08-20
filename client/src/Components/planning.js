import React from "react";
function Plan() {
  return (
    <div className="back2 flex justify-center items-center text-white">
      <div className=" ">
        <div className="mt-20">
          <div className="text-5xl p-5">Let's Make Your</div>
          <div className="text-5xl p-5">Next Holiday Amazing</div>
        </div>
        <div className="mb-20 mt-5 flex  justify-center items-center backdrop-blur text-white   px-5 py-5 ">
          <div className="text-xl px-5">Where to?</div>
          <div className="text-xl px-5">Travel Type</div>
          <div className="text-xl px-5">Duration</div>
          <button className=" px-7 py-5 rounded font-semibold text-[#23C6BB]  bg-[#F3F3F3] hover:bg-[#23C6BB] hover:border-[#23C6BB] hover:text-[#F3F3F3]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Plan;
