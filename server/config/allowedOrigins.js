const allowedOrigins = [
  'https://recipe-hub-eight.vercel.app/',
  "https://recipen-backend.onrender.com",
  `${process.env.CLIENT_BASE_URL}`
];

module.exports = allowedOrigins;
