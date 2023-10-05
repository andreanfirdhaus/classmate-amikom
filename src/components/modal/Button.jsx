import React from "react";

export default function Button() {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn btn-xs"
                onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                }
            >
                Search
            </button>
        </>
    );
}
