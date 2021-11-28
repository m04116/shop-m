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
  images: {
    domains: ['fakestoreapi.com'],
  },
}
