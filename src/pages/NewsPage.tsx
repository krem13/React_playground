import React from "react";
import ScrollToTop from "../components/ScrollToTop";

export default function NewsPage() {
  return (
    <>
      <ScrollToTop />
      <div className="mb-16 flex flex-col text-center items-center justify-center">
        <h1 className="text-4xl font-semibold my-16 text-gray-900">
          Hacker News
        </h1>
        <h2 className="text-2xl font-normal my-16 text-gray-900">
          TBA/TBD
        </h2>
      </div>
    </>
  );
}
