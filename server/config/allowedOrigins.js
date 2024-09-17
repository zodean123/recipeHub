const allowedOrigins = [
  "https://recipen.vercel.app",
  "https://recipen-backend.onrender.com",
  `${process.env.CLIENT_BASE_URL}`
];

module.exports = allowedOrigins;
