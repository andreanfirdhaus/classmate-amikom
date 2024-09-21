import { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/data-context";
import getData from "@/services/web-services";
import SEO from "@/components/seo";
import Content from "@/layout/content";
import { ClassmatesVector } from "@/assets/vector";
import { useTheme } from "@/components/theme-provider";
import Hero from "@/layout/hero";

export default function Classmates() {
  const { data } = useContext(DataContext);
  const [url, setUrl] = useState([]);
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const fetchData = async () => {
    if (!data) return;

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
    if (data) {
      fetchData();
    }
    setCurrentTheme(theme);
  }, [data, theme]);

  const myColor = currentTheme === "light" ? "#09090b" : "#fafafa";
  const myColor1 = currentTheme === "light" ? "#fafafa" : "#09090b";

  return (
    <Fragment>
      <SEO
        title="Classmate"
        description="A simple application to display a list of classmates and alumni of Amikom University Yogyakarta based on photos."
        name="Classmate Amikom"
        domain="https://classmate-amikom.vercel.app/"
      />
      {url.length == 0 ? (
        <Hero
          vectorComponent={
            <ClassmatesVector outsideColor={myColor} ringColor={myColor1} />
          }
          title="Classmates"
          desc="A simple application to display Amikom University Yogyakarta  classmates and alumni through photos."
        />
      ) : (
        <section className="mt-8 sm:mt-24 mb-24 sm:mb-12 space-y-8">
          <div className="h-14 sm:h-28 flex justify-center items-center text-center">
            <h1 className="capitalize text-lg">Your classmates</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 content-center">
            <Content data={url} />
          </div>
        </section>
      )}
    </Fragment>
  );
}
