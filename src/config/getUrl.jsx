const getUrl = (year, grade, program, nim) => {
  return {
    classmates: `${
      import.meta.env.VITE_BASE_URL1
    }/${year}/${grade}_${program}_${nim}.jpg`,

    graduated: `${
      import.meta.env.VITE_BASE_URL2
    }/${year}/${grade}_${program}_${nim}.jpg`,
  };
};

export default getUrl;
