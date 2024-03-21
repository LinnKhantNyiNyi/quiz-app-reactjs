import React from "react";
import History from "../assets/imgs/art_history_2.jpg";

export default function CategoryCard({ children }) {
  return (
    <div class="card mt-5" style={{ width: "700px", height: "450px" }}>
      <img src={History} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{children}</h5>

        <a href="#" class="btn btn-primary mt-1">
          Start Quiz
        </a>
      </div>
    </div>
  );
}
