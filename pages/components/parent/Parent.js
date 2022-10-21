import React, { useEffect, useState } from "react";

export default function Parent({ img }) {
  const [imgH, setImgH] = useState(0);
  const [imgW, setImgW] = useState(0);
  useEffect(() => {
    setImgH(document.getElementById("parent-img").offsetHeight);
    setImgW(document.getElementById("parent-img").offsetWidth);
  });
  return (
    <div className="h-[80vh] w-full flex justify-center items-center overflow-auto">
      <div className="rounded-md overflow-hidden">
        <div id="my-node" className="relative max-w-[80vw] sm:h-96 p-6">
          <img
            id="parent-img"
            src={img || "/placeholder.svg"}
            placeholder="/placeholder.svg"
            alt=""
            className={`max-w-full sm:max-h-full max-h-96 rounded-md aspect-[${
              imgW / imgH
            }]`}
          />
        </div>
      </div>
    </div>
  );
}
