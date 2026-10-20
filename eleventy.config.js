import { renderFrame } from "./src/js/discoball.js";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  // Pre-built CV PDFs (regenerate with `npm run pdf` after editing resume.js).
  eleventyConfig.addPassthroughCopy({ "src/files": "/" });
  eleventyConfig.addPassthroughCopy("cauldron.png");
  // Static disco ball frame, from the same renderer the browser spins (shown with JS off or reduced motion).
  eleventyConfig.addShortcode("discoball", (cols = 24, rows = 12) => renderFrame({ cols, rows }));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
