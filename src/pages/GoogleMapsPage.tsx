import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import GoogleMaps from "../components/GoogleMaps";

export default function GoogleMapsPage() {
  return (
    <>
      <ScrollToTop />
      <div className="mb-16 flex flex-col text-center items-center justify-center">
        <h1 className="text-4xl font-semibold my-16 text-gray-900">
          Google Maps API demo
        </h1>
        <h2 className="text-2xl font-normal my-16 text-gray-900">
          Under construction
        </h2>
        <div className="flex w-full h-12 px-5 bg-gray-800 text-white justify-between items-center">
          BOLIGFILTER
        </div>

        <div className="flex w-full justify-end items-center border border-gray-500">
          <div className="w-1/4 border-r border-gray-500 p-4 text-gray-500">
            <h2 className="font-semibold my-2">Ejendomstype:</h2>
            <button className="border border-gray-500 px-4 py-1 w-full uppercase mb-2">
              Villa
            </button>
            <button className="border border-gray-500 px-4 py-1 w-full uppercase mb-2">
              Andelsbolig
            </button>
            <button className="border border-gray-500 px-4 py-1 w-full uppercase mb-2">
              Ejerlejlighed
            </button>
            <button className="border border-gray-500 px-4 py-1 w-full uppercase mb-2">
              Villalejlighed
            </button>
            <h2 className="font-semibold my-2">Byområde:</h2>
            <button className="border border-gray-500 px-4 py-1 w-full uppercase mb-2">
              Valby
            </button>
            <button className="border border-gray-500 px-4 py-1 w-full uppercase mb-2">
              Amager1
            </button>
            <button className="border border-gray-500 px-4 py-1 w-full uppercase mb-2">
              Amager2
            </button>
          </div>
          <div className="w-3/4">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </>
  );
}
