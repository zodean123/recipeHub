const allowedOrigins = [
  "https://recipen.vercel.app",
  "https://recipen-backend.onrender.com",
  "https://recipe-hub-vert.vercel.app/",
  `${process.env.CLIENT_BASE_URL}`
];

module.exports = allowedOrigins;
