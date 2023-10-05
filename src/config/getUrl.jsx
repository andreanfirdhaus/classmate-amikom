const getUrl = (batchYear, classOf, majorCode, nim) => {
    return {
        classmates: `https://fotomhs.amikom.ac.id/${batchYear}/${classOf}_${majorCode}_${nim}.jpg`,
        graduated: `https://amikom.ac.id/public/foto_wisuda/${batchYear}/${classOf}_${majorCode}_${nim}.jpg`,

        // classmates: `https://fotomhs.amikom.ac.id/2019/19_11_${nim}.jpg`,
        // graduated: `https://amikom.ac.id/public/foto_wisuda/2019/19_11_${nim}.jpg`,
    };
};

export default getUrl;
