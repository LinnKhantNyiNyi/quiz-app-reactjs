import React from "react";
import Navbar from "../components/Navbar";
import CategorySection from "../components/CategorySection";

export default function Home() {
  return (
    <>
      <div className="container mt-3 ">
        <Navbar />
        <CategorySection />
      </div>
    </>
  );
}
