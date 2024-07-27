import { useState, useEffect, useContext, Fragment } from "react";
import { DataContext } from "@/context/data-context";
import getData from "../services/web-services";
import Content from "@/components/layout/content";
import LottiePlayer from "@/components/layout/lottie-player";
import SEO from "@/components/seo";
import { useErrorImageContext } from "@/context/error-context";

export default function Graduated() {
  const { data } = useContext(DataContext);
  const { errorUrls } = useErrorImageContext();
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
        </>
      ) : (
        <section className="mt-24 space-y-8">
          <div className="h-14 sm:h-28 flex justify-center items-center text-center">
            <h1 className="capitalize text-lg">
              Who have not graduated yet <br />{" "}
              <strong>{errorUrls.length}</strong> from {url.length}
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 content-center">
            <Content data={url} />
          </div>
        </section>
      )}
    </Fragment>
  );
}
