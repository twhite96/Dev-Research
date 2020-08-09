module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Dev Research`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
        prismPreset: "night-owl",
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `favicon.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        showLineNumbers: false,
        noInlineHighlight: false,
        // This adds a new language definition to Prism or extend an already
        // existing language definition. More details on this option can be
        // found under the header "Add new language definition or extend an
        // existing language" below.
      },
    },
  ],
};
