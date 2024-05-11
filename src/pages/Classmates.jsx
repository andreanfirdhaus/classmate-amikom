import { useState, useEffect, useContext } from "react";
import { DataContext } from "../components/data-context";
import getData from "../services/web-services";
import Content from "../components/layout/content";
import LottiePlayer from "../components/layout/lottie-player";

export default function Classmates() {
  const { data } = useContext(DataContext);
  const [url, setUrl] = useState([]);

  const fetchData = async () => {
    const newUrl = [];
    for (let i = data.nimAwal; i <= data.nimAkhir; i++) {
      const url = getData(
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
      <LottiePlayer
        src={"https://assets5.lottiefiles.com/packages/lf20_rc6CDU.json"}
        width="260px"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 content-center">
        <Content data={url} />
      </div>
    </main>
  );
}
