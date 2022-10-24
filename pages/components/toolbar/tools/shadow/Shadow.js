import {
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function Shadow() {
  const [isVisible, setIsVisible] = useState(false);
  // Click away handle
  const handleClickAway = () => {
    setIsVisible(false);
  };
  function setShadow(s) {
    document.getElementById("parent-img").style.boxShadow = `${s}`;
  }
  return (
    <>
      <div
        className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200"
        onClick={() => setIsVisible(true)}
      >
        <button className="transform p-3 flex flex-col shadow font-semibold text-xs justify-center items-center rounded-full bg-zinc-300 text-zinc-900 ease-in-out duration-200 hover:bg-zinc-300/90 group outline-none active:scale-95 ring ring-zinc-900 dark:ring-0">
          <RectangleStackIcon className="w-7 stroke-[1.5]" />
          <span className="absolute -bottom-6 opacity-70 group-hover:opacity-100 dark:text-zinc-300 text-zinc-900">
            Shadow
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
                  <div className=" transform text-base sm:text-lg md:text-xl p-4 py-8 max-h-96 w-full text-zinc-500 dark:text-zinc-200 transition-color duration-300 ease-in-out overflow-y-auto flex flex-wrap justify-center gap-4">
                    {/* content */}
                    <span className="absolute text-xs bottom-2 opacity-50">Hover to see Shadow Effect</span>
                    
                    {/* None */}
                    <div
                      className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                      onClick={() => setShadow("0 0 #0000")}
                    >
                      <div className="w-16 aspect-square bg-zinc-500 dark:bg-zinc-300 rounded hover:shadow-none group-hover:bg-zinc-400 dark:bg-zinc-300/90 group-active:scale-95 ease-in-out duration-200 mb-1" />
                      None
                    </div>
                    {/* Small */}
                    <div
                      className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                      onClick={() => setShadow("0 1px 2px 0 rgb(0 0 0 / 0.05)")}
                    >
                      <div className="w-16 aspect-square bg-zinc-500 dark:bg-zinc-300 rounded hover:shadow-sm group-hover:bg-zinc-400 dark:bg-zinc-300/90 group-active:scale-95 ease-in-out duration-200 mb-1" />
                      Small
                    </div>
                    {/* Large */}
                    <div
                      className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                      onClick={() =>
                        setShadow(
                          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
                        )
                      }
                    >
                      <div className="w-16 aspect-square bg-zinc-500 dark:bg-zinc-300 rounded hover:shadow-lg group-hover:bg-zinc-400 dark:bg-zinc-300/90 group-active:scale-95 ease-in-out duration-200 mb-1" />
                      Large
                    </div>
                    {/* 2XL */}
                    <div
                      className="w-20 aspect-square text-sm font-semibold flex flex-col justify-center items-center cursor-pointer group"
                      onClick={() =>
                        setShadow("0 25px 50px -12px rgb(0 0 0 / 0.25)")
                      }
                    >
                      <div className="w-16 aspect-square bg-zinc-500 dark:bg-zinc-300 rounded hover:shadow-2xl group-hover:bg-zinc-400 dark:bg-zinc-300/90 group-active:scale-95 ease-in-out duration-200 mb-1" />
                      2XL
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
