import { useState, useEffect, useContext, Fragment } from "react";
import { DataContext } from "@/components/data-context";
import getData from "../services/web-services";
import Content from "@/components/layout/content";
import LottiePlayer from "@/components/layout/lottie-player";
import Footer from "@/components/layout/footer";
import SEO from "@/components/seo";

export default function Graduated() {
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
      ).graduated;
      newUrl.push(url);
    }
    setUrl(newUrl);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <Fragment>
      <SEO
        title="Who's Graduated"
        description="View Your Classmate Who's Graduated"
        name="Classmate Amikom"
        domain="https://classmate-amikom.vercel.app/graduated"
      />
      {url.length == 0 ? (
        <>
          <div className="fixed inset-0 flex flex-col justify-center items-center">
            <LottiePlayer
              src={"https://assets5.lottiefiles.com/packages/lf20_rc6CDU.json"}
              width="308px"
            />
            <h1 className="text-base text-center text-muted-foreground -mt-4">
              No photos found for <br />
              <span className="font-semibold">graduated</span>
            </h1>
          </div>
          <Footer className="fixed bottom-0 right-0 w-full z-10" />
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 content-center mt-20">
            <Content data={url} />
          </div>
          <Footer />
        </>
      )}
    </Fragment>
  );
}
