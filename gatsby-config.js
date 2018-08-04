module.exports = { 
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 3,
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        exclude: `\/global\/`,
      },
    }
  ]
}
