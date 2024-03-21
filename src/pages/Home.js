import React from "react";
import Navbar from "../components/Navbar";
import CategorySection from "../components/CategorySection";

export default function Home() {
  return (
    <>
      <div className="container-l  ">
        <Navbar />
        <CategorySection />
      </div>
    </>
  );
}
