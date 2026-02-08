import { useState, useEffect } from "react";
import { ENV } from "@/config/env";

interface FormData {
  tahunAngkatan: string;
  programStudi: string;
  nimAwal: string;
  nimAkhir: string;
}

type PageType = "classmates" | "graduated" | "assistant";

export const generateUrls = (data: FormData, type: PageType): string[] => {
  if (!data) return [];

  let baseUrl: string;
  switch (type) {
    case "graduated":
      baseUrl = ENV.baseUrls.graduated;
      break;
    case "assistant":
      baseUrl = ENV.baseUrls.assistant;
      break;
    default:
      baseUrl = ENV.baseUrls.classmates;
  }

  const urls: string[] = [];
  const nimStart = parseInt(data.nimAwal);
  const nimEnd = parseInt(data.nimAkhir);

  for (let i = nimStart; i <= nimEnd; i++) {
    let url: string;
    if (type === "assistant") {
      url = `${baseUrl}/${data.tahunAngkatan.slice(2)}.${data.programStudi}.${i}`;
    } else {
      url = `${baseUrl}/${data.tahunAngkatan}/${data.tahunAngkatan.slice(2)}_${data.programStudi}_${i}.jpg`;
    }
    urls.push(url);
  }

  return urls;
};

export const useUrlGenerator = (data: FormData | null, type: PageType) => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (data) {
      const generatedUrls = generateUrls(data, type);
      setUrls(generatedUrls);
    }
    setLoading(false);
  }, [data, type]);

  return { urls, loading };
};
