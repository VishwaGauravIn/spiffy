import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

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
        <div id="my-node" className="relative max-w-[80vw] sm:h-96 p-6 flex justify-center items-center">
          <Draggable>
            <img
              id="parent-img"
              src={img || "/placeholder.svg"}
              alt=""
              draggable={false}
              className={
                img
                  ? `max-w-full sm:max-h-full max-h-96 rounded-md aspect-[${
                      imgW / imgH
                    }] cursor-move`
                  : `max-w-full sm:max-h-full max-h-96 rounded-md aspect-[${
                      imgW / imgH
                    }] cursor-move`
              }
            />
          </Draggable>
        </div>
      </div>
    </div>
  );
}
