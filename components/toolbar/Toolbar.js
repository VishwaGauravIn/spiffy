import React, { useEffect } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Background from "./tools/background/Background";
import Corners from "./tools/corners/Corners";
import Padding from "./tools/padding/Padding";
import Shadow from "./tools/shadow/Shadow";
import Download from "./tools/download/Download";
import Resize from "./tools/resize/Resize";
import useClipboardImage from "./tools/clipboard/Clipboard";
import CopyClipboard from "./tools/clipboard/CopyClipboard";


export default function Toolbar({ onImageChange, img }) {
  useClipboardImage(onImageChange);
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center z-10 py-5">
        <div className="w-full sm:w-10/12 flex flex-wrap justify-center items-center gap-4">
          {/* If no image selected we will show big upload button */}
          {!img && (
            <button
              className="transform p-4 flex font-semibold text-lg justify-center items-center px-8 rounded-full bg-yellow-300 text-yellow-900 ease-in-out hover:bg-yellow-300/90 group outline-none ring ring-yellow-900 dark:ring-0"
              onClick={() => document.getElementById("file_select").click()}
            >
              <ArrowUpTrayIcon className="w-6 mr-2 stroke-[2] group-hover:-rotate-3 group-active:rotate-3" />
              Upload Screenshot
            </button>
          )}
          {/* All options are visible when an image is selected */}
          {img && (
            <div className="flex gap-4 overflow-x-auto pb-6 pt-2">
              <div className="w-max gap-6 flex h-max px-4">
                <button
                  className="transform p-3 flex flex-col font-semibold text-xs justify-center items-center rounded-full bg-yellow-300 text-yellow-900 ease-in-out duration-200 hover:bg-yellow-300/90 group outline-none active:scale-95 ring ring-yellow-900 dark:ring-0"
                  onClick={() => document.getElementById("file_select").click()}
                >
                  <ArrowUpTrayIcon className="w-7 stroke-[1.5]" />
                  <span className="absolute -bottom-6 opacity-70 group-hover:opacity-100 dark:text-yellow-300 text-yellow-900">
                    Upload
                  </span>
                </button>
                <CopyClipboard />
                <Download />
                <Background img={img} />
                <Resize />
                <Corners />
                <Padding />
                <Shadow />
              </div>
            </div>
          )}
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
