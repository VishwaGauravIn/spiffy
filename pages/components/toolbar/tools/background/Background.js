import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Color from "./Color";
const getColors = require("get-image-colors");
var rgb2hex = require("rgb2hex");

export default function Background({ img }) {
  const [isVisible, setIsVisible] = useState(false);
  const [colors, setColors] = useState([]);
  // Click away handle
  const handleClickAway = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    if (img !== undefined) {
      getColors(img).then((clr) => {
        // `colors` is an array of color objects
        setColors(clr);
      });
    }
  }, [img]);
  useEffect(() => {
    if (colors.length !== 0) {
      document.getElementById(
        "my-node"
      ).style.backgroundColor = `rgb( ${colors[0]._rgb[0]} , ${colors[0]._rgb[1]} , ${colors[0]._rgb[2]})`;
    }
  }, [colors]);
  return (
    <>
      <div
        className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200"
        onClick={() => setIsVisible(true)}
      >
        <button className="transform p-3 flex flex-col font-semibold text-xs justify-center items-center rounded-full bg-rose-300 text-rose-900 ease-in-out duration-200 hover:bg-rose-300/90 group outline-none active:scale-95 ring ring-rose-900 dark:ring-0">
          <PaintBrushIcon className="w-7 stroke-[1.5]" />
          <span className="absolute -bottom-6 opacity-70 group-hover:opacity-100 dark:text-rose-300 text-rose-900">
            Background
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
                  <div className="transform h-96 text-base sm:text-lg md:text-xl p-4 py-4 max-h-96 w-full text-zinc-600 dark:text-zinc-200 transition-color duration-300 ease-in-out overflow-y-scroll flex flex-col items-center">
                    {/* content */}
                    <p className="font-semibold text-base my-4">
                      Colors Extraced from your Image:
                    </p>
                    <div className="flex">
                      {colors.map((color, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={color.hex()}
                          className="w-8 h-8 inline hover:scale-105"
                          onClick={() =>
                            (document.getElementById(
                              "my-node"
                            ).style.backgroundColor = color.hex()) &
                            setIsVisible(false) &
                            (document.getElementById(
                              "my-node"
                            ).style.backgroundImage = "")
                          }
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-semibold text-base my-4">Gradients:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Color
                        bgcolor="c1"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(150deg, rgb(0, 176, 158), rgb(19, 77, 93), rgb(16, 23, 31))") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c2"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c3"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(326deg, #861657 0%, #ffa69e 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c4"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c5"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #20bf55 0%, #01baef 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c6"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c7"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #a40606 0%, #d98324 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c8"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #0cbaba 0%, #380036 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c9"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #eec0c6 0%, #e58c8a 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c10"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c11"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c12"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c13"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c14"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c15"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            " linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c16"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #d387ab 0%, #b279a7 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c17"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #e899dc 0%, #d387ab 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c18"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c19"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c20"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #772f1a 0%, #f2a65a 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c21"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #9e8fb2 0%, #a7acd9 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c22"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #ebbe9b 0%, #e7a977 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c23"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #ffac81 0%, #ff928b 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c24"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #63d471 0%, #233329 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c25"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c26"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c27"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c28"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #00b712 0%, #5aff15 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c29"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c30"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c31"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f9c1b1 0%, #fb8085 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c32"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c33"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c34"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c35"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c36"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #d5adc8 0%, #ff8489 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c37"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f39f86 0%, #f9d976 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c38"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c39"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #36096d 0%, #37d5d6 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c40"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c41"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #5de6de 0%, #b58ecc 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c42"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c44"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c45"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c46"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c47"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c48"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c49"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #d8dede 0%, #e5bdf6 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c50"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c51"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c52"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c53"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c54"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #9eabe4 0%, #77eed8 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c55"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)") &
                          setIsVisible(false)
                        }
                      />
                      <Color
                        bgcolor="c56"
                        onClick={() =>
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundImage =
                            "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)") &
                          setIsVisible(false)
                        }
                      />
                    </div>
                    <div className="flex justify-center items-center mt-10 mb-6">
                      <p className="font-semibold text-base mr-4">
                        Custom Color:
                      </p>
                      <input
                        type="color"
                        name=""
                        id=""
                        defaultValue={
                          rgb2hex(
                            document.getElementById("my-node").style
                              .backgroundColor
                          ).hex
                        }
                        onClick={(e) =>
                          (e.target.value = rgb2hex(
                            document.getElementById("my-node").style
                              .backgroundColor
                          ).hex)
                        }
                        onChange={(e) => {
                          (document.getElementById(
                            "my-node"
                          ).style.backgroundColor = e.target.value) &
                            (document.getElementById(
                              "my-node"
                            ).style.backgroundImage = "");
                        }}
                      />
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
