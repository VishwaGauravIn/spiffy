import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Resizer from "./Resizer";

export default function Resize() {
  const [isVisible, setIsVisible] = useState(false);
  // Click away handle
  const handleClickAway = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div
        className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200"
        onClick={() => setIsVisible(true)}
      >
        <button className="transform p-3 flex flex-col shadow font-semibold text-xs justify-center items-center rounded-full bg-sky-300 text-sky-900 ease-in-out duration-200 hover:bg-sky-300/90 group outline-none active:scale-95 ring ring-sky-900 dark:ring-0">
          <ArrowsPointingOutIcon className="w-7 stroke-[1.5]" />
          <span className="absolute -bottom-6 opacity-70 group-hover:opacity-100 dark:text-sky-300 text-sky-900">
            Resize
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
                      id="close-btn"
                      onClick={() => setIsVisible(false)}
                    ></div>
                  </div>
                  <div className=" transform text-base sm:text-lg md:text-xl p-4 py-8 max-h-96 w-full text-zinc-500 dark:text-zinc-200 transition-color duration-300 ease-in-out overflow-y-auto flex flex-wrap justify-center gap-4">
                    {/* content */}
                    <Resizer
                      app="none"
                      label="None"
                      aspect="auto"
                      ring={true}
                    />
                    <Resizer
                      app="square"
                      label="Square"
                      aspect={1}
                      ring={true}
                    />
                    <Resizer
                      app="portrait"
                      label="Portrait"
                      aspect={9 / 16}
                      ring={true}
                    />
                    <Resizer
                      app="landscape"
                      label="Landscape"
                      aspect={16 / 9}
                      ring={true}
                    />
                    <Resizer
                      app="instagram"
                      label="Instagram Story"
                      aspect={9 / 16}
                    />
                    <Resizer
                      app="instagram"
                      label="Instagram Post"
                      aspect={1}
                    />
                    <Resizer app="snapchat" label="Snapchat" aspect={9 / 16} />
                    <Resizer
                      app="whatsapp"
                      label="WhatsApp Status"
                      aspect={9 / 16}
                    />
                    <Resizer
                      app="facebook"
                      label="Facebook Post"
                      aspect={600 / 315}
                    />
                    <Resizer
                      app="facebook"
                      label="Facebook Header"
                      aspect={820 / 312}
                    />
                    <Resizer
                      app="youtube"
                      label="Thumbnail"
                      aspect={1280 / 720}
                    />
                    <Resizer
                      app="youtube"
                      label="Channel Art"
                      aspect={16 / 9}
                    />
                    <Resizer
                      app="twitter"
                      label="Twitter Header"
                      aspect={3 / 1}
                    />
                    <Resizer
                      app="linkedin"
                      label="LinkedIn Header"
                      aspect={800 / 200}
                    />
                    <Resizer
                      app="linkedin"
                      label="LinkedIn Post"
                      aspect={1200 / 627}
                    />
                    <Resizer
                      app="google-play"
                      label="Portrait"
                      aspect={9 / 16}
                    />
                    <Resizer
                      app="google-play"
                      label="Landscape"
                      aspect={16 / 9}
                    />
                    <Resizer app="app-store" label="Portrait" aspect={9 / 16} />
                    <Resizer
                      app="app-store"
                      label="Landscape"
                      aspect={16 / 9}
                    />
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
