// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'English Grammar Trainer',
  siteUrl: 'https://evgenykon.github.io',
  pathPrefix: '/english-grammar-trainer',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Docs',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          categories: {
            typeName: 'Category',
            create: true,
          },
        },
      },
    },
  ],
}
