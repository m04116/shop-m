module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/all-products',
        permanent: true,
      },
    ]
  },
}
