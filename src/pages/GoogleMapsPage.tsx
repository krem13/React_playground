import React from "react";
import ScrollToTop from "../components/ScrollToTop";

export default function GoogleMapsPage() {
  return (
    <>
      <ScrollToTop />
      <div className="mb-16 flex flex-col text-center items-center justify-center">
        <h1 className="text-4xl font-semibold my-16 text-gray-900">
          Google Maps API demo
        </h1>
      </div>
    </>
  );
}
