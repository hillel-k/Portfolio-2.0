const pluginTailwind = require('eleventy-plugin-tailwindcss');
const Image = require("@11ty/eleventy-img")


module.exports = (config) => {
  config.addPlugin(pluginTailwind, {
    src: 'src/assets/css/*'
  });

  config.setDataDeepMerge(true);

 
  config.addPassthroughCopy('src/assets/img/*');
  config.addPassthroughCopy({ 'src/posts/img/**/*': 'assets/img/' });
  config.addPassthroughCopy({ 'src/projets/img/**/*': 'assets/img/' });

  config.addWatchTarget("src/assets/js/");

  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk');
  config.addLayoutAlias('projet', 'layouts/projet.njk');

  config.addFilter('readableDate', require('./lib/filters/readableDate'));
  config.addFilter('minifyJs', require('./lib/filters/minifyJs'));

  config.addTransform('minifyHtml', require('./lib/transforms/minifyHtml'));

  config.addCollection('posts', require('./lib/collections/posts'));
  config.addCollection('tagList', require('./lib/collections/tagList'));
  config.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));
  config.addCollection('pagedPostsByTag', require('./lib/collections/pagedPostsByTag'));
  
  //Collection projets
  config.addCollection('projets', require('./lib/collections/projets'));
  config.addCollection('tagProjets', require('./lib/collections/tagProjet'));
  config.addCollection('pagedProjets', require('./lib/collections/pagedProjets'));
  config.addCollection('pagedProjetsByTag', require('./lib/collections/pagedProjetsByTag'));




  
  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    // pathPrefix: "/subfolder/",
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
