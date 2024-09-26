const markdownIt = require("markdown-it");

const md = new markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("markdown", function (content) {
    if (typeof content === "string") {
      console.log("Rendering", content);
      return md.render(content);
    } else {
      return content;
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
