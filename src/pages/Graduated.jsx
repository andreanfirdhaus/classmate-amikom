import { GraduatedVector } from "@/assets/vector";
import { DataContext } from "@/context/data-context";
import { useErrorImageContext } from "@/context/error-context";
import Content from "@/layout/content";
import Hero from "@/layout/hero";
import MetaData from "@/layout/meta-data";
import { Fragment, useContext } from "react";
import { useGetUrls } from "../services/web-services";

export default function Graduated() {
  const { data } = useContext(DataContext);
  const { errorUrls } = useErrorImageContext();
  const { urls, loading } = useGetUrls(data, "graduated");

  if (loading) return <div>Loading...</div>;

  return (
    <Fragment>
      <MetaData
        title="Who's Graduated"
        description="View Your Classmate Who's Graduated"
        name="Classmate Amikom"
        domain="https://classmate-amikom.vercel.app/graduated"
      />
      {urls.length === 0 ? (
        <Hero
          vectorComponent={<GraduatedVector />}
          title="Graduated"
          desc="Your classmates who have passed the Undergraduate Thesis Examination"
        />
      ) : (
        <section className="mt-8 sm:mt-24 mb-24 sm:mb-12 space-y-8">
          <div className="h-14 sm:h-28 flex justify-center items-center text-center">
            <h1 className="capitalize text-lg">
              Who have not graduated yet <br />
              <strong>{errorUrls.length}</strong> from {urls.length}
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 content-center">
            <Content data={urls} />
          </div>
        </section>
      )}
    </Fragment>
  );
}
