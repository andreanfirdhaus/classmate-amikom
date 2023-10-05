import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function Modal({ updatePathURL }) {
    const [yearCode, setYearCode] = useState("");
    const [classOfCode, setClassOfCode] = useState("");
    const [majorCode, setMajorCode] = useState("");
    const [startNIM, setStartNIM] = useState("");
    const [endNIM, setEndNIM] = useState("");

    const handleSubmit = (e) => {
        // e.preventDefault();
        updatePathURL(yearCode, classOfCode, majorCode, startNIM, endNIM);
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <IoClose size={25} />
                        </button>
                        <div className="grid grid-cols-4 grid-rows-4 gap-5">
                            <div className="col-span-2">
                                {/* form input 1 */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            Tahun Angkatan
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="20xx"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        value={yearCode}
                                        onChange={(e) =>
                                            setYearCode(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col-span-2 row-start-2">
                                {/* form input 2 */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            Kode Angkatan
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="xx"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        required
                                        value={classOfCode}
                                        onChange={(e) =>
                                            setClassOfCode(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 col-start-3 row-start-2">
                                {/* form input 3 */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            Kode Prodi
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="xx"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        value={majorCode}
                                        onChange={(e) =>
                                            setMajorCode(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 row-start-3">
                                {/* form input 4 */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            Start NIM
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="xxxx"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        value={startNIM}
                                        onChange={(e) =>
                                            setStartNIM(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 col-start-3 row-start-3">
                                {/* form input 5 */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            End NIM
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="xxxx"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        requireds
                                        value={endNIM}
                                        onChange={(e) =>
                                            setEndNIM(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 row-start-4">
                                {/* button */}
                                <button
                                    className="btn btn-sm btn-block btn-neutral"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Check
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Modal;
