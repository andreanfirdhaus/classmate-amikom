import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";

const schema = yup
  .object()
  .shape({
    tahun_angkatan: yup.string().required("tahun angkatan is required"),
    kode_prodi: yup.string().required("kode prodi is required"),
    nim_awal: yup.string().required("nim awal is required"),
    nim_akhir: yup.string().required("nim akhir is required"),
  })
  .required();

export default function Modal({ updatePathURL }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close(); // Close modal
    }
    reset(); // Reset data
  };

  const onSubmit = (data) => {
    updatePathURL(
      data.tahun_angkatan,
      data.kode_prodi,
      data.nim_awal,
      data.nim_akhir,
    );
    closeModal();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            onClick={closeModal}
          >
            <IoClose size={25} />
          </button>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3 rounded-md py-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text md:text-base font-medium">
                    Tahun Angkatan
                  </span>
                </label>
                <select
                  className={`select select-bordered select-sm w-full ${
                    errors.tahun_angkatan?.message
                      ? "border-2 border-error"
                      : ""
                  }`}
                  {...register("tahun_angkatan", {
                    required: true,
                  })}
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text md:text-base font-medium">
                    Prodi
                  </span>
                </label>
                <select
                  className={`select select-bordered select-sm w-full ${
                    errors.kode_prodi?.message ? "border-2 border-error" : ""
                  }`}
                  {...register("kode_prodi")}
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="11">Informatika</option>
                  <option value="12">Sistem Informasi</option>
                  <option value="95">Hubungan Internasional</option>
                  <option value="67">Ilmu Komunikasi Internasional</option>
                  <option value="82">Teknologi Informasi</option>
                  <option value="96">Ilmu Komunikasi</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text md:text-base font-medium">
                    NIM Awal
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="4 digits"
                  className={`input input-bordered input-sm w-full placeholder:tracking-wider placeholder:text-gray-400 placeholder:text-xs ${
                    errors.nim_awal?.message ? " border-2 border-error" : ""
                  }`}
                  {...register("nim_awal")}
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text md:text-base font-medium">
                    NIM Akhir
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="4 digits"
                  className={`input input-bordered input-sm w-full placeholder:tracking-wider placeholder:text-gray-400 placeholder:text-xs ${
                    errors.nim_akhir?.message ? " border-2 border-error" : ""
                  }`}
                  {...register("nim_akhir")}
                />
              </div>
            </div>

            <div className="pt-10 relative">
              {Object.keys(errors).length > 1 ? (
                <div className="absolute z-10 top-1 left-1/2 transform -translate-x-1/2 tracking-wide text-error label-text font-medium text-center capitalize w-full">
                  Lengkapi semua field diatas
                </div>
              ) : Object.keys(errors).length < 2 ? (
                <div className="absolute z-10 top-1 left-1/2 transform -translate-x-1/2 tracking-wide text-error label-text font-medium text-center capitalize w-full">
                  {errors.tahun_angkatan?.message ||
                    errors.kode_prodi?.message ||
                    errors.nim_awal?.message ||
                    errors.nim_akhir?.message}
                </div>
              ) : (
                ""
              )}
              <button
                className="btn btn-sm btn-block btn-neutral transition"
                type="submit"
              >
                Check
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
