module.exports = {
  layout: 'projet',
  title: 'Untitled Projets',
  eleventyComputed: {
    permalink: (data) => `/projets/${data.page.fileSlug}/index.html`,
    thumb: (data) => {
      if (data.thumb) {
        if (data.thumb.search(/^https?:\/\//) !== -1) {
          return data.thumb;
        }
        return `/assets/img/${data.thumb}`;
      } else {
        return false;
      }
    }
  }
};
