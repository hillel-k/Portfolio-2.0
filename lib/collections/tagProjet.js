function fromEntries (iterable) {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;

    return obj;
  }, {});
}

/* Collection output format:
{
  tagName: numberOfprojetsWithTagName,
  ...
}
*/
module.exports = (coll) => {
  const projets = require('./projets')(coll);

  const tagProjetArr = projets
    .reduce((tags, projet) => {
      if ('tagProjet' in projet.data) {
        tags = tags.concat(projet.data.tags);
      }

      return [...new Set(tags)];
    }, [])
    .map((tag) => ([
      tag,
      coll.getFilteredByTag(tag).length
    ]))
    .sort((a, b) => b[1] - a[1]);
    
  return fromEntries(tagProjetArr);
};
