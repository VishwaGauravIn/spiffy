import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React from "react";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export default function Download() {
  function downloadNormal() {
    document.getElementById("my-node").style.transform = "scale(1)"; //imp
    let style = { borderRadius: 0 };
    // JPG
    htmlToImage
      .toJpeg(
        document.getElementById("my-node"),
        { quality: 1 },
        {
          style: style,
        }
      )
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "spiffy.jpeg";
        link.href = dataUrl;
        link.click();
      });
  }
  return (
    <button
      className="flex transform p-3 flex-col font-semibold text-xs justify-center items-center rounded-full bg-emerald-300 text-emerald-900 ease-in-out duration-200 hover:bg-emerald-300/90 group outline-none active:scale-95 ring ring-emerald-900 dark:ring-0"
      onClick={downloadNormal}
    >
      <ArrowDownTrayIcon className="w-7 stroke-[1.5]" />
      <span className="absolute -bottom-5 opacity-70 group-hover:opacity-100 dark:text-emerald-300 text-emerald-900">
        Download
      </span>
    </button>
  );
}
