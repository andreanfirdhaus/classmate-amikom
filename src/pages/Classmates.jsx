import { useState, useEffect, useContext } from "react";
import { DataContext } from "../components/data-context";
import getUrl from "../config/getUrl";
import Content from "../components/layout/content";

export default function Classmates() {
  const { data } = useContext(DataContext);
  const [url, setUrl] = useState([]);

  const fetchData = async () => {
    const newUrl = [];
    for (let i = data.nimAwal; i <= data.nimAkhir; i++) {
      const url = getUrl(
        data.tahunAngkatan,
        data.tahunAngkatan.slice(2),
        data.programStudi,
        i,
      ).classmates;
      newUrl.push(url);
    }
    setUrl(newUrl);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <main className="container mx-auto w-full px-6 sm:px-0 md:w-[48.5rem] mt-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 content-center">
        <Content data={url} />
      </div>
    </main>
  );
}
