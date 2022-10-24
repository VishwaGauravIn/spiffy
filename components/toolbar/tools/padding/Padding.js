import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function Padding() {
  const [isVisible, setIsVisible] = useState(false);
  const [pVal, setPVal] = useState(1.5);
  // Click away handle
  const handleClickAway = () => {
    setIsVisible(false);
  };
  //   Padding Persists on Session Switch
  useEffect(() => {
    const plocal = localStorage.getItem("betterscreensort_p");
    // If padding value exists in local storage, we will set its value to pval
    if (plocal) {
      setPVal(plocal);
      document.getElementById("my-node").style.padding = `${plocal}rem`;
    }
  }, []);

  function setPadding() {
    localStorage.setItem("betterscreensort_p", pVal);
    document.getElementById("my-node").style.padding = `${pVal}rem`;
  }
  return (
    <>
      <div
        className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200"
        onClick={() => setIsVisible(true)}
      >
        <button className="transform p-3 flex flex-col font-semibold text-xs justify-center items-center rounded-full bg-indigo-300 text-indigo-900 ease-in-out duration-200 hover:bg-indigo-300/90 group outline-none active:scale-95 ring ring-indigo-900 dark:ring-0">
          <ViewfinderCircleIcon className="w-7 stroke-[1.5]" />
          <span className="absolute -bottom-6 opacity-70 group-hover:opacity-100 dark:text-indigo-300 text-indigo-900">
            Padding
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
                  <div className=" transform text-base sm:text-lg md:text-xl p-4 py-8 max-h-96 w-full text-indigo-500 dark:text-indigo-300 transition-color duration-300 ease-in-out overflow-y-auto flex flex-wrap justify-center gap-4 items-center">
                    {/* content */}
                    0rem
                    <input
                      type="range"
                      min={0}
                      max={5}
                      onChange={(e) => setPVal(e.target.value) & setPadding()}
                      step={0.25}
                      value={pVal}
                      className="w-6/12 accent-indigo-500 dark:accent-indigo-300 -mb-1.5"
                    />
                    5rem
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
