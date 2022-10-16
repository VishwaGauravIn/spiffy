import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function Corners() {
  const [isVisible, setIsVisible] = useState(false);
  // Click away handle
  const handleClickAway = () => {
    setIsVisible(false);
  };
  function setBorderRadius(r) {
    document.getElementById("parent-img").style.borderRadius = `${r}rem`;
  }
  return (
    <>
      <div
        className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200"
        onClick={() => setIsVisible(true)}
      >
        <button className="transform p-3 flex flex-col font-semibold text-xs justify-center items-center rounded-full bg-fuchsia-300 text-fuchsia-900 ease-in-out duration-200 hover:bg-fuchsia-300/90 group outline-none active:scale-95 ring ring-fuchsia-900 dark:ring-0">
          <CursorArrowRippleIcon className="w-7 stroke-[1.5]" />
          <span className="absolute -bottom-5 opacity-70 group-hover:opacity-100 dark:text-fuchsia-300 text-fuchsia-900">
            Corners
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
                <div className="modal-maximize transform transition-all ease-in-out duration-200 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 h-max rounded-2xl bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-blue-200 m-2 fade-on-appear">
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
                  <div className=" transform text-base sm:text-lg md:text-xl p-4 py-4 max-h-96 w-full text-zinc-600 dark:text-blue-200 transition-color duration-300 ease-in-out overflow-y-scroll flex flex-wrap justify-center gap-4">
                    {/* content */}
                    <div className="" onClick={() => setBorderRadius(0)}>
                      none
                    </div>
                    <div className="" onClick={() => setBorderRadius(0.25)}>
                      basic
                    </div>
                    <div className="" onClick={() => setBorderRadius(0.125)}>
                      sm
                    </div>
                    <div className="" onClick={() => setBorderRadius(0.375)}>
                      md
                    </div>
                    <div className="" onClick={() => setBorderRadius(0.5)}>
                      lg
                    </div>
                    <div className="" onClick={() => setBorderRadius(0.75)}>
                      xl
                    </div>
                    <div className="" onClick={() => setBorderRadius(1)}>
                      2xl
                    </div>
                    <div className="" onClick={() => setBorderRadius(1.5)}>
                      3xl
                    </div>
                    <div className="" onClick={() => setBorderRadius(9999)}>
                      full
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
