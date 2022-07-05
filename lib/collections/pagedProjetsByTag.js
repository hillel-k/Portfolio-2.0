const siteData = require('../../src/_data/site');

module.exports = (coll) => {
  const tagProjets = require('./tagProjet')(coll);

  const maxProjetsPerPage = siteData.paginate;
  const pagedProjets = [];

  Object.keys(tagProjets).forEach((tagName) => {
    const taggedProjets = [...coll.getFilteredByTag(tagName)].reverse();
    const numberOfPages = Math.ceil(taggedProjets.length / maxProjetsPerPage);

    for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
      const sliceFrom = (pageNum - 1) * maxProjetsPerPage;
      const sliceTo = sliceFrom + maxProjetsPerPage;

      pagedProjets.push({
        tagName,
        number: pageNum,
        projets: taggedProjets.slice(sliceFrom, sliceTo),
        first: pageNum === 1,
        last: pageNum === numberOfPages
      });
    }
  });

  return pagedProjets;
};
