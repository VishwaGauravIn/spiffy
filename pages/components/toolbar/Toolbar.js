import React from "react";
import {
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
  ArrowUpTrayIcon,
  CursorArrowRippleIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import Background from "./tools/background/Background";
import Corners from "./tools/corners/Corners";
import Padding from "./tools/padding/Padding";

export default function Toolbar({ onImageChange }) {
  return (
    <>
      <div className="absolute bottom-0 w-full flex justify-center z-10 py-5">
        <div className="w-10/12 flex flex-wrap justify-center items-center gap-4">
          <button
            className="hidden transform p-4 sm:flex font-semibold text-lg justify-center items-center px-8 rounded-full bg-yellow-300 text-yellow-900 ease-in-out hover:bg-yellow-300/90 group outline-none"
            onClick={() => document.getElementById("file_select").click()}
          >
            <ArrowUpTrayIcon className="w-6 mr-2 stroke-[2] group-hover:-rotate-3 group-active:rotate-3" />
            Upload Screenshot
          </button>
          <div className="flex flex-wrap gap-4">
            <button className="sm:hidden transform p-3 flex flex-col font-semibold text-xs justify-center items-center rounded-full bg-yellow-300 text-yellow-900 ease-in-out duration-200 hover:bg-yellow-300/90 group outline-none active:scale-95">
              <ArrowUpTrayIcon className="w-7 stroke-[1.5]" />
              <span className="absolute -bottom-5 opacity-70 group-hover:opacity-100 dark:text-yellow-300 text-yellow-900">
                Upload
              </span>
            </button>
            <button className="transform p-3 flex flex-col font-semibold text-xs justify-center items-center rounded-full bg-emerald-300 text-emerald-900 ease-in-out duration-200 hover:bg-emerald-300/90 group outline-none active:scale-95 ring ring-emerald-900 dark:ring-0">
              <ArrowDownTrayIcon className="w-7 stroke-[1.5]" />
              <span className="absolute -bottom-5 opacity-70 group-hover:opacity-100 dark:text-emerald-300 text-emerald-900">
                Download
              </span>
            </button>
            <Corners />
            <Background />
            <Padding />
          </div>
        </div>
        <input
          id="file_select"
          type="file"
          className="hidden"
          onChange={onImageChange}
          accept="image/*"
        />
      </div>
    </>
  );
}
