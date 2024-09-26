module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addGlobalData("eleventyComputed", {
    debug: function () {
      return this;
    },
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
