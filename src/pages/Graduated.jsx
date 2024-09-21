import { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/data-context";
import getData from "@/services/web-services";
import SEO from "@/components/seo";
import Content from "@/layout/content";
import { useErrorImageContext } from "@/context/error-context";
import { GraduatedVector } from "@/assets/vector";
import Hero from "@/layout/hero";

export default function Graduated() {
  const { data } = useContext(DataContext);
  const { errorUrls } = useErrorImageContext();
  const [url, setUrl] = useState([]);

  const fetchData = async () => {
    if (!data) return;

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
    if (data) {
      fetchData();
    }
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
        <Hero
          vectorComponent={<GraduatedVector />}
          title="Graduated"
          desc=" Your classmates who have passed the Undergraduate Thesis
              Examination"
        />
      ) : (
        <section className="mt-8 sm:mt-24 mb-24 sm:mb-12 space-y-8">
          <div className="h-14 sm:h-28 flex justify-center items-center text-center">
            <h1 className="capitalize text-lg">
              Who have not graduated yet <br />
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
