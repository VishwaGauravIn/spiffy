import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import * as htmlToImage from "html-to-image";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { toast } from "react-toastify";
import imgConverter from "image-converter-pro";

export default function Download() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloadButtonDisabled, setIsDownloadButtonDisabled] =
    useState(false);
  const [downloadFormat, setDownloadFormat] = useState("png");
  // Click away handle
  const handleClickAway = () => {
    setIsVisible(false);
  };
  function downloadCustom(size) {
    setIsVisible(false);
    setIsDownloadButtonDisabled(true);
    toast.info("Starting Download...", { toastId: "start" });
    document.getElementById("my-node").style.transform = "scale(1)"; //imp
    let width = document.getElementById("my-node").offsetWidth;
    let height = document.getElementById("my-node").offsetHeight;
    let style = { borderRadius: 0 };
    // JPG
    htmlToImage
      .toSvg(document.getElementById("my-node"), {
        style: style,
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        imgConverter(
          dataUrl,
          width,
          height,
          downloadFormat,
          size / height
        ).then((dataUri) => {
          link.download = `spiffy.${downloadFormat}`;
          link.href = dataUri;
          link.click();
          toast.dismiss("start");
          toast.success("Downloaded Successfully!");
          setIsDownloadButtonDisabled(false);
        });
      });
  }
  useEffect(() => {
    if (isVisible) {
      document.getElementById(downloadFormat).checked = true;
    }
  }, [isVisible]);
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200">
        <button
          className="flex transform p-3 flex-col font-semibold text-xs justify-center items-center rounded-full bg-emerald-300 text-emerald-900 ease-in-out duration-200 hover:bg-emerald-300/90 group outline-none active:scale-95 ring ring-emerald-900 dark:ring-0 disabled:cursor-not-allowed"
          onClick={() => setIsVisible(true)}
          disabled={isDownloadButtonDisabled}
        >
          <ArrowDownTrayIcon className="w-7 stroke-[1.5]" />
          <span className="absolute -bottom-6 opacity-70 group-hover:opacity-100 dark:text-emerald-300 text-emerald-900">
            Download
          </span>
        </button>
      </div>
      {isVisible && (
        <div className="menu-modal z-40 justify-center items-center fixed w-screen h-screen left-0 top-0 custom-bg-modal transition-color duration-300 ease-in-out">
          <ClickAwayListener onClickAway={handleClickAway}>
            <div
              id="mydiv"
              className="flex top-1/2 transform -translate-y-1/2 w-full z-20 fixed justify-center items-center"
            >
              <ClickAwayListener onClickAway={handleClickAway}>
                <div className="modal-maximize transform transition-all ease-in-out duration-200 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 h-max rounded-xl bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-blue-200 m-2 fade-on-appear shadow-parent">
                  <div
                    id="mydivheader"
                    className="flex w-full justify-end items-center relative p-2 bg-zinc-200 dark:bg-zinc-800 h-9 rounded-t-xl transition-color duration-300 ease-in-out"
                  >
                    <div
                      className="rounded-full w-4 h-4 bg-green-400 ml-1 cursor-pointer"
                      onClick={() => setIsVisible(false)}
                    ></div>
                    <div
                      className="rounded-full w-4 h-4 bg-yellow-400 ml-1 cursor-pointer"
                      onClick={() => setIsVisible(false)}
                    ></div>
                    <div
                      className="rounded-full w-4 h-4 bg-red-400 ml-1 cursor-pointer"
                      onClick={() => setIsVisible(false)}
                    ></div>
                  </div>
                  <div className=" transform text-base sm:text-lg md:text-xl p-4 py-8 max-h-96 w-full text-zinc-500 dark:text-zinc-200 transition-color duration-300 ease-in-out overflow-y-auto flex flex-col flex-wrap items-center gap-4">
                    {/* content */}
                    <div className="flex justify-center flex-wrap gap-4">
                      {/* SD */}
                      <div
                        className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                        onClick={() => downloadCustom(480)}
                      >
                        <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out mb-2 flex justify-center items-center ring ring-green-900 dark:ring-green-300 hover:bg-green-900 dark:hover:bg-green-300 dark:hover:text-zinc-800 hover:text-zinc-200 text-green-900 dark:text-green-300 text-xl font-semibold">
                          SD
                        </div>
                        480p
                      </div>
                      {/* HD */}
                      <div
                        className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                        onClick={() => downloadCustom(720)}
                      >
                        <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out mb-2 flex justify-center items-center ring ring-green-900 dark:ring-green-300 hover:bg-green-900 dark:hover:bg-green-300 dark:hover:text-zinc-800 hover:text-zinc-200 text-green-900 dark:text-green-300 text-xl font-semibold">
                          HD
                        </div>
                        720p
                      </div>
                      {/* FHD */}
                      <div
                        className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                        onClick={() => downloadCustom(1080)}
                      >
                        <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out mb-2 flex justify-center items-center ring ring-green-900 dark:ring-green-300 hover:bg-green-900 dark:hover:bg-green-300 dark:hover:text-zinc-800 hover:text-zinc-200 text-green-900 dark:text-green-300 text-xl font-semibold">
                          FHD
                        </div>
                        1080p
                      </div>
                      {/* 2K */}
                      <div
                        className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                        onClick={() => downloadCustom(1440)}
                      >
                        <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out mb-2 flex justify-center items-center ring ring-green-900 dark:ring-green-300 hover:bg-green-900 dark:hover:bg-green-300 dark:hover:text-zinc-800 hover:text-zinc-200 text-green-900 dark:text-green-300 text-xl font-semibold">
                          2K
                        </div>
                        1440p
                      </div>
                      {/* 4K */}
                      <div
                        className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                        onClick={() => downloadCustom(2160)}
                      >
                        <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out mb-2 flex justify-center items-center ring ring-green-900 dark:ring-green-300 hover:bg-green-900 dark:hover:bg-green-300 dark:hover:text-zinc-800 hover:text-zinc-200 text-green-900 dark:text-green-300 text-xl font-semibold">
                          4K
                        </div>
                        2160p
                      </div>
                      {/* 8K */}
                      <div
                        className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                        onClick={() => downloadCustom(4320)}
                      >
                        <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out mb-2 flex justify-center items-center ring ring-green-900 dark:ring-green-300 hover:bg-green-900 dark:hover:bg-green-300 dark:hover:text-zinc-800 hover:text-zinc-200 text-green-900 dark:text-green-300 text-xl font-semibold">
                          8K
                        </div>
                        4320p
                      </div>
                    </div>
                    <div className="mt-4">
                      <div
                        className="flex gap-4 text-sm font-semibold"
                        onChange={(e) => setDownloadFormat(e.target.value)}
                      >
                        <span className="flex justify-center items-center">
                          <input
                            type="radio"
                            name="format"
                            id="png"
                            value="png"
                            className="w-4 h-4 accent-emerald-300 mr-2"
                          />
                          <label>PNG</label>
                        </span>
                        <span className="flex justify-center items-center">
                          <input
                            type="radio"
                            name="format"
                            id="jpg"
                            value="jpg"
                            className="w-4 h-4 accent-emerald-300 mr-2"
                          />
                          <label>JPG</label>
                        </span>
                        <span className="flex justify-center items-center">
                          <input
                            type="radio"
                            name="format"
                            id="bmp"
                            value="bmp"
                            className="w-4 h-4 accent-emerald-300 mr-2"
                          />
                          <label>BMP</label>
                        </span>
                        <span className="flex justify-center items-center">
                          <input
                            type="radio"
                            name="format"
                            id="webp"
                            value="webp"
                            className="w-4 h-4 accent-emerald-300 mr-2"
                          />
                          <label>WEBP</label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ClickAwayListener>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </>
  );
}
