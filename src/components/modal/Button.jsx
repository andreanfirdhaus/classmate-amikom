import React from "react";

export default function Button() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm tracking-wide normal-case"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Search
      </button>
    </>
  );
}
