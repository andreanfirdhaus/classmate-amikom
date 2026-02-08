import { ClassmatesVector } from "@/assets/vector";
import { useTheme } from "@/components/theme-provider";
import { DataContext } from "@/context/data-context";
import Content from "@/layout/content";
import Hero from "@/layout/hero";
import MetaData from "@/components/meta-data";
import { Fragment, useContext } from "react";
import { useUrlGenerator } from "@/utils/hooks/useUrl";

export default function Classmates() {
  const { data } = useContext(DataContext);
  console.log(data)
  const { urls, loading } = useUrlGenerator(data, "classmates");
  const { theme } = useTheme();
  const currentTheme = theme;

  const fill = currentTheme === "light" ? "#fafafa" : "#09090B";
  const outside = currentTheme === "light" ? "#09090b" : "#fafafa";
  const frame = currentTheme === "light" ? "#09090b" : "";

  if (loading) return <></>;

  return (
    <Fragment>
      <MetaData
        title="Classmate Amikom"
        description="A simple application to display a list of classmates and alumni of Amikom University Yogyakarta based on photos."
        name="Classmate Amikom"
        domain="https://classmate-amikom.vercel.app/"
        type='website'
      />
      {urls.length === 0 ? (
        <Hero
          vectorComponent={
            <ClassmatesVector fill={fill} outside={outside} frame={frame} />
          }
          title="Classmate"
          desc="View your classmates photos"
        />
      ) : (
        <section className="mt-24 mb-24 sm:mb-12 space-y-8">
          <div className="h-14 sm:h-28 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-bold text-foreground capitalize">
              classmates
            </h1>
            <p className="text-base text-muted-foreground mt-1.5">
              these are your classmates {" • "}
              from {data.nimAwal} - {data.nimAkhir}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 content-center">
            <Content data={urls} />
          </div>
        </section>
      )}
    </Fragment>
  );
}
