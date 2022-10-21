import { SparklesIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
const getColors = require("get-image-colors");

export default function Magic({ img }) {
  const [isVisible, setIsVisible] = useState(false);
  const [colors, setColors] = useState([]);
  // Click away handle
  const handleClickAway = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    if (img !== undefined) {
      getColors(img).then((colors) => {
        // `colors` is an array of color objects
        setColors(colors);
      });
    }
  }, []);
  return (
    <>
      <div
        className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200"
        onClick={() => setIsVisible(true)}
      >
        <button className="transform p-3 flex flex-col font-semibold text-xs justify-center items-center rounded-full bg-cyan-300 text-cyan-900 ease-in-out duration-200 hover:bg-cyan-300/90 group outline-none active:scale-95 ring ring-cyan-900 dark:ring-0">
          <SparklesIcon className="w-7 stroke-[1.5]" />
          <span className="absolute -bottom-5 opacity-70 group-hover:opacity-100 dark:text-cyan-300 text-cyan-900">
            Magic Bg
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
                  <div className=" transform text-base sm:text-lg md:text-xl p-4 py-8 max-h-96 w-full text-indigo-500 dark:text-indigo-300 transition-color duration-300 ease-in-out overflow-y-auto flex flex-wrap justify-center gap-4 items-center">
                    {/* content */}
                    {colors.map((color, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={color.hex()}
                        className="w-8 h-8 inline"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundColor = color.hex())
                        }
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    ))}
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
