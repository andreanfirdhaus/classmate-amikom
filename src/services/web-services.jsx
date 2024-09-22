import { useState, useEffect } from "react";

const getData = async (data, type) => {
  if (!data) return [];

  const newUrl = [];
  for (let i = data.nimAwal; i <= data.nimAkhir; i++) {
    const url = `${
      import.meta.env[`VITE_BASE_URL${type === "graduated" ? 2 : 1}`]
    }/${data.tahunAngkatan}/${data.tahunAngkatan.slice(2)}_${data.programStudi}_${i}.jpg`;
    newUrl.push(url);
  }
  return newUrl;
};

export const useGetUrls = (data, type) => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUrls = async () => {
      setLoading(true);
      const fetchedUrls = await getData(data, type);
      setUrls(fetchedUrls);
    };

    if (data) {
      getUrls();
    }

    setLoading(false);
  }, [data, type]);

  return { urls, loading };
};
