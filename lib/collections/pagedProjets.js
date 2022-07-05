const siteData = require('../../src/_data/site');

module.exports = (coll) => {
  const allProjets = require('./projets')(coll);

  const maxProjetsPerPage = siteData.paginate;
  const numberOfPages = Math.ceil(allProjets.length / maxProjetsPerPage);
  const pagedProjets = [];

  for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    const sliceFrom = (pageNum - 1) * maxProjetsPerPage;
    const sliceTo = sliceFrom + maxProjetsPerPage;

    pagedProjets.push({
      number: pageNum,
      projets: allProjets.slice(sliceFrom, sliceTo),
      first: pageNum === 1,
      last: pageNum === numberOfPages
    });
  }

  return pagedProjets;
};
