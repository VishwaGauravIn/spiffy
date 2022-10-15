import React from "react";
import { ArrowUpTrayIcon} from '@heroicons/react/24/outline'

export default function Toolbar() {
  return (
    <div className="absolute bottom-4 w-full flex justify-center z-10">
      <div className="w-10/12 h-20 ring ring-teal-600 rounded-md relative ">
        <button className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex font-semibold text-lg justify-center items-center px-8 rounded-full bg-teal-600 text-white ring ring-offset-2 ring-teal-600 ease-in-out hover:bg-teal-700 group outline-none">
            <ArrowUpTrayIcon className="w-6 mr-2 stroke-[2] group-hover:-rotate-3 group-active:rotate-3"/> Upload Screenshot
        </button>
      </div>
    </div>
  );
}
