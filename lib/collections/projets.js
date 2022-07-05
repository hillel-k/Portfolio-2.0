module.exports = (coll) => {
  const posts = [...coll.getFilteredByGlob('src/projets/*.md')];

  return posts.reverse();
};
