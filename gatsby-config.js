module.exports = {
    plugins:[
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-postcss',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            }
        }
    ]
}