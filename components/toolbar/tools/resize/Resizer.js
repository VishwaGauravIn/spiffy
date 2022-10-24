import React from "react";

export default function Resizer({ app, label, aspect, ring = false }) {
  function resizerFun() {
    document.getElementById("my-node").style.aspectRatio = aspect;
    document.getElementById("close-btn").click();
  }
  return (
    <div
      className="w-28 aspect-square text-sm flex flex-col justify-center items-center cursor-pointer group text-center"
      onClick={resizerFun}
    >
      <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out duration-200 p-2">
        <img
          src={`/icons/${app}.png`}
          alt={label}
          className={`rounded-full shadow-md hover:scale-105 ${
            ring && "ring-2"
          } ring-[#8D6E63]`}
        />
      </div>
      {label}
    </div>
  );
}
