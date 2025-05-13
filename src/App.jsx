import React from "react";
import { FilterItem } from "./components/filter-item";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex flex-col items-center">
        <FilterItem />
      </div>
    </>
  );
}

export default App;
