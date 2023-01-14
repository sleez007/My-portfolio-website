/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register:true,
  skipWaiting:true,
  sw: 'service-worker.js',
  disable:process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
})
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// }

//module.exports = nextConfig
