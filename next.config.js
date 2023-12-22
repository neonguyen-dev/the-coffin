/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    //trailingSlash: true,
    distDir: '.next',
    compress: false,
    webpack(webpackConfig) {
        return {
          ...webpackConfig,
          optimization: {
            minimize: false
          }
        };
      }
}

module.exports = nextConfig
