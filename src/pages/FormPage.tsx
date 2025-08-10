import React from "react";
import CustomTextField from "../components/CustomTextField";
import ScrollToTop from "../components/ScrollToTop";

export default function FormPage() {
  return (
    <>
      <ScrollToTop />
      <div className="mb-16 flex flex-col text-center items-center justify-center">
        <h1 className="text-4xl font-semibold my-6 text-gray-900">
          Custom form
        </h1>
        <CustomTextField />
      </div>
    </>
  );
}
