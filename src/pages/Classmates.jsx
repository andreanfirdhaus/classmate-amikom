import FormDialog from "@/components/partial/form-dialog";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { DataContext } from "@/context/data-context";
import Content from "@/layout/content";
import { Fragment, useContext, useEffect, useState } from "react";
import getData from "../services/web-services";

export default function Classmates() {
  const { data } = useContext(DataContext);
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
      ).classmates;
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
        title="Classmate"
        description="A simple application to display a list of classmates and alumni of Amikom University Yogyakarta based on photos."
        name="Classmate Amikom"
        domain="https://classmate-amikom.vercel.app/"
      />
      {url.length == 0 ? (
        <div className="fixed left-[50%] top-[50%] z-50 grid justify-items-center text-center w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Classmates
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            A simple app to display a list of classmates and alumni of Amikom
            University Yogyakarta based on photos.
          </p>
          <FormDialog>
            <Button
              variant="default"
              size="lg"
              className="mt-4 sm:mt-6 px-5 py-6 capitalize text-base font-normal sm:text-lg rounded-full"
            >
              Search
            </Button>
          </FormDialog>
        </div>
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
