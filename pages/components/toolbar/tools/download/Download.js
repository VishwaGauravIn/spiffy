import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React from "react";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export default function Download() {
  function downloadCustom(size) {
    document.getElementById("my-node").style.transform = "scale(1)"; //imp
    let width = document.getElementById("parent-img").offsetWidth;
    let height = document.getElementById("parent-img").offsetHeight;
    let style = { borderRadius: 0 };
    // JPG
    htmlToImage
      .toSvg(document.getElementById("my-node"), {
        style: style,
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        svgToPng(dataUrl, width, height, size / height).then((dataUri) => {
          link.download = "spiffy.png";
          link.href = dataUri;
          link.click();
        });
      });
  }
  const svgToPng = (svgDataurl, width, height, scale) =>
    new Promise((resolve, reject) => {
      let canvas;
      let ctx;
      let img;

      img = new Image();
      img.src = svgDataurl;
      img.onload = () => {
        canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          width * scale,
          height * scale
        );

        img = new Image();
        img.src = canvas.toDataURL("image/png");
        img.onload = () => {
          canvas = document.createElement("canvas");
          canvas.width = width * scale;
          canvas.height = height * scale;
          ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        };
      };
    });
  return (
    <button
      className="flex transform p-3 flex-col font-semibold text-xs justify-center items-center rounded-full bg-emerald-300 text-emerald-900 ease-in-out duration-200 hover:bg-emerald-300/90 group outline-none active:scale-95 ring ring-emerald-900 dark:ring-0"
      onClick={() => downloadCustom(720)}
    >
      <ArrowDownTrayIcon className="w-7 stroke-[1.5]" />
      <span className="absolute -bottom-5 opacity-70 group-hover:opacity-100 dark:text-emerald-300 text-emerald-900">
        Download
      </span>
    </button>
  );
}
