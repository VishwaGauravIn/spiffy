import React from "react";

export default function Parent({img}) {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center overflow-auto">
      <div id="my-node" className="relative max-w-[80vw] h-96 rounded-md ring p-6">
        <img src={img} alt="" className="max-h-[100%] rounded-md" />
      </div>
    </div>
  );
}
