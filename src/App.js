import React from "react";
import "./App.css";
import { Themeprovider } from "./themecontext";
import Themetoggler from "./themetoggler";

function App() {
  return (
    <Themeprovider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Welcome to Theme Changer
        </h1>
        <Themetoggler />
      </div>
    </Themeprovider>
  );
}

export default App;
