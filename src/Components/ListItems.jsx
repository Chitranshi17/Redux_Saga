import React from "react";

const ListItems = () => {
  return (
    <li className="list-group-item my-1 w-100 ">
      <span className="w-100 d-flex align-items-center justify-content-around">
        <div className="w-50">
          <h3>Tilte : Title Here</h3>
          <h5>Description : Lorem ipsum dolor sit amet.</h5>
        </div>
        <div className="w-50 d-flex align-items-center justify-content-end">
          <button className="bg-warning text-light p-2 border-0">Edit</button>
          <button className="bg-danger text-light p-2  border-0">Delete</button>
        </div>
      </span>
    </li>
  );
};

export default ListItems;
