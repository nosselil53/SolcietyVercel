const path = require('path')
const withCss = require('@zeit/next-css')
const withImages = require('next-images')
module.exports = withImages(withCss({
    
        cssLoaderOptions: {
          url: false
        }
      }))
