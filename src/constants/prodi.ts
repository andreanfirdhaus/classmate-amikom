export interface Prodi {
  id: string;
  id_fakultas: string;
  jenjang: "D3" | "S1";
  kode: string;
  nama_prodi: string;
  status: "Y" | "N";
  website: string;
}

export interface Fakultas {
  id: string;
  nama: string;
  website: string;
}

export const FAKULTAS_LIST: Fakultas[] = [
  { id: "1", nama: "Fakultas Ilmu Komputer", website: "https://fik.amikom.ac.id" },
  { id: "2", nama: "Fakultas Ekonomi & Sosial", website: "https://fes.amikom.ac.id" },
  { id: "3", nama: "Fakultas Sains & Teknologi", website: "https://fst.amikom.ac.id" },
];

export const PRODI_LIST: Prodi[] = [
  {
    id: "3",
    id_fakultas: "1",
    jenjang: "D3",
    kode: "02",
    nama_prodi: "Manajemen Informatika",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "4",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "11",
    nama_prodi: "Informatika Reguler",
    status: "Y",
    website: "https://if.amikom.ac.id",
  },
  {
    id: "5",
    id_fakultas: "1",
    jenjang: "D3",
    kode: "01",
    nama_prodi: "Teknik Informatika",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "6",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "12",
    nama_prodi: "Sistem Informasi Reguler",
    status: "Y",
    website: "https://si.amikom.ac.id",
  },
  {
    id: "7",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "22",
    nama_prodi: "Sistem Informasi TR",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "8",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "21",
    nama_prodi: "Informatika TR",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "9",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "83",
    nama_prodi: "Teknik Komputer",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "10",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "82",
    nama_prodi: "Teknologi Informasi",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "11",
    id_fakultas: "3",
    jenjang: "S1",
    kode: "84",
    nama_prodi: "Arsitektur",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "12",
    id_fakultas: "3",
    jenjang: "S1",
    kode: "85",
    nama_prodi: "Geografi",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "13",
    id_fakultas: "3",
    jenjang: "S1",
    kode: "86",
    nama_prodi: "Perancangan Wilayah dan Kota",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "14",
    id_fakultas: "2",
    jenjang: "S1",
    kode: "91",
    nama_prodi: "Ekonomi",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "15",
    id_fakultas: "2",
    jenjang: "S1",
    kode: "92",
    nama_prodi: "Kewirausahaan",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "16",
    id_fakultas: "2",
    jenjang: "S1",
    kode: "93",
    nama_prodi: "Akuntansi",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "17",
    id_fakultas: "2",
    jenjang: "S1",
    kode: "94",
    nama_prodi: "Ilmu Pemerintahan",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "18",
    id_fakultas: "2",
    jenjang: "S1",
    kode: "95",
    nama_prodi: "Hubungan Internasional",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "19",
    id_fakultas: "2",
    jenjang: "S1",
    kode: "96",
    nama_prodi: "Ilmu Komunikasi",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "20",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "62",
    nama_prodi: "BCIS",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "21",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "60",
    nama_prodi: "BCIT",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "22",
    id_fakultas: "1",
    jenjang: "S1",
    kode: "61",
    nama_prodi: "BCI",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
  {
    id: "23",
    id_fakultas: "2",
    jenjang: "S1",
    kode: "67",
    nama_prodi: "Ilmu Komunikasi Internasional",
    status: "Y",
    website: "https://home.amikom.ac.id",
  },
];

export const getProdiOptions = () =>
  PRODI_LIST.filter((p) => p.status === "Y")
    .map((p) => ({
      value: p.kode,
      label: `${p.nama_prodi} (${p.jenjang})`,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

export const getAcademicYearOptions = (startYear = 2018) => {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let y = startYear; y <= currentYear + 1; y++) {
    years.push(y);
  }
  return years;
};

export const getFakultasName = (id: string): string => {
  return FAKULTAS_LIST.find((f) => f.id === id)?.nama || "Unknown";
};
