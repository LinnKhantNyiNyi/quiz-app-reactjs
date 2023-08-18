import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg border rounded-top p-2">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <h2 className="font">Quizy</h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav-list"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="#">
                <p className="text-dark font">SignIn</p>
              </a>
              <a class="nav-link" href="#">
                <p className="text-dark font">SignUp</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
