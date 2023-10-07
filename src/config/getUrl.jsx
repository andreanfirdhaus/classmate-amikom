const getUrl = (batchYear, classOf, majorCode, nim) => {
    return {
        classmates: `${
            import.meta.env.VITE_BASE_URL1
        }/${batchYear}/${classOf}_${majorCode}_${nim}.jpg`,

        graduated: `${
            import.meta.env.VITE_BASE_URL2
        }/${batchYear}/${classOf}_${majorCode}_${nim}.jpg`,
    };
};

export default getUrl;
