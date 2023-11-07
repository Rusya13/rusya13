const { eleventyPlugin } = require('vite-plugin-eleventy');

export default {
    root: "dist",
    plugins: [eleventyPlugin()],
};