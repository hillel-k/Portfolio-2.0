const pluginTailwind = require('eleventy-plugin-tailwindcss');

const pluginTOC = require('eleventy-plugin-toc')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}
const mdAnchorOpts = {
  permalink: true,
  permalinkClass: 'anchor-link',
  permalinkSymbol: '#',
  level: [1, 2, 3, 4]
}

const metagen = require('eleventy-plugin-metagen');

const readingTime = require('eleventy-plugin-reading-time');



module.exports = (config) => {
  config.addPlugin(pluginTailwind, {
    src: 'src/assets/css/*'
  });

  config.setDataDeepMerge(true);

 
  config.addPassthroughCopy('src/assets/img/*');
  config.addPassthroughCopy('src/assets/img/lab/*');
  config.addPassthroughCopy('src/projets/img');
  config.addPassthroughCopy({ 'src/posts/img/**/*': 'assets/img/' });
  config.addPassthroughCopy({ 'src/projets/img/**/*': 'assets/img/' });

  //11ty Plugins 
  config.addPlugin(pluginTOC)
  
  config.setLibrary(
    'md',
    markdownIt(mdOptions)
      .use(markdownItAnchor, mdAnchorOpts)
  )

  config.addPlugin(metagen);

  config.addPlugin(readingTime);


  //JS Modules

  config.addPassthroughCopy('./src/assets/js/cookieBar.js');
  config.addPassthroughCopy('./src/assets/js/transition.js');

  config.addWatchTarget("src/assets/js/");

  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk');
  config.addLayoutAlias('projet', 'layouts/projet.njk');

  config.addFilter('readableDate', require('./lib/filters/readableDate'));
  config.addFilter('minifyJs', require('./lib/filters/minifyJs'));

  config.addTransform('minifyHtml', require('./lib/transforms/minifyHtml'));

  config.addCollection('posts', require('./lib/collections/posts'));

  config.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));

  
  //Collection projets
  config.addCollection('projets', require('./lib/collections/projets'));
  config.addCollection('pagedProjets', require('./lib/collections/pagedProjets'));

  config.addCollection('pagedPostsByTag', require('./lib/collections/pagedPostsByTag'));
  config.addCollection('tagList', require('./lib/collections/tagList'));
  
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




