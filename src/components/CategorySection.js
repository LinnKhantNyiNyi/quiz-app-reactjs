import React from "react";

export default function CategorySection() {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 text-center ">
        <h1 className="font mt-3">Choose your speciality</h1>
        <ul className="list-group  mt-5 text-start border border-1">
          <button className="CatBtn">
            <li className="list-group-item p-3 border border-1 categoty">
              An item
            </li>
          </button>
          <button className="CatBtn">
            <li className="list-group-item p-3 border border-1 categoty">
              second item
            </li>
          </button>
          {/* <a href="#" className="catLink">
            <li className="list-group-item p-3 border border-1 categoty">
              A second item
            </li>
          </a> */}
          <li className="list-group-item p-3 border border-1 categoty">
            A third item
          </li>
          <li className="list-group-item p-3 border border-1 categoty">
            A fourth item
          </li>
          <li className="list-group-item p-3 border border-1 categoty">
            a fifth one
          </li>
        </ul>
      </div>
    </div>
  );
}
