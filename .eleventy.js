const MarkdownIt = require('markdown-it');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');
require('dotenv').config();

module.exports = (eleventyConfig) => {
  let md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  });

  eleventyConfig.addPassthroughCopy({ 'public/img': '/img' });
  eleventyConfig.addPassthroughCopy({ 'public/fonts': '/fonts' });
  eleventyConfig.addPassthroughCopy('404.html');
  eleventyConfig.addPassthroughCopy('ads.txt');
  eleventyConfig.addPassthroughCopy('_redirects');
  eleventyConfig.addPassthroughCopy('robots.txt');

  // Add the md filter
  eleventyConfig.addFilter('md', function (content) {
    return md.render(content);
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://musicpiechart.com',
    },
  });

  return {
    dir: {
      input: 'src',
      output: 'docs',
    },
  };
};
