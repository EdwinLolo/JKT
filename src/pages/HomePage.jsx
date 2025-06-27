import React from "react";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <p className="mt-4 text-lg">
        Welcome to the home page of our application!
      </p>
    </div>
  );
}
