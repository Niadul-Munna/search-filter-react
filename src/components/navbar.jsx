import React from "react";
export default function Navbar() {
  return (
    <nav className="bg-slate-600  w-full">
      <div className="mx-auto container flex items-center justify-between">
        <h1 className="text-2xl text-white font-semibold p-4">Filter</h1>
        <button className="bg-amber-50 px-4 py-2 rounded">Login</button>
      </div>
    </nav>
  );
}
