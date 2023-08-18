import React from "react";
import Img from "../assets/imgs/nav-bg.jpg";

export default function CategoryCard({ children }) {
  return (
    <div class="card mt-5" style={{ width: "700px", height: "450px" }}>
      <img src={Img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{children}</h5>

        <a href="#" class="btn btn-primary mt-1">
          Start Quiz
        </a>
      </div>
    </div>
  );
}
