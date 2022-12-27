module.exports = (coll) => {
  const blogPosts = [...coll.getFilteredByGlob('src/posts/*.md')];

  return blogPosts.reverse();
};
