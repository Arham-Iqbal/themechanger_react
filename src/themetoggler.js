import React, { useContext } from "react";
import { Themecontext } from "./themecontext";

const Themetoggler = () => {
  const { theme, changetheme } = useContext(Themecontext);

  return (
    <div
      className={`w-80 p-6 text-center rounded-lg shadow-md transition-colors duration-500 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <p className="mb-4">The current theme is {theme}</p>
      <button
        onClick={changetheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Themetoggler;
