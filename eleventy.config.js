export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  // Pre-built CV PDFs (regenerate with `npm run pdf` after editing resume.js).
  eleventyConfig.addPassthroughCopy({ "src/files": "/" });
  eleventyConfig.addPassthroughCopy("cauldron.png");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
