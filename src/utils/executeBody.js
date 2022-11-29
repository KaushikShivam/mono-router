module.exports = (req, cb) => {
  const chunks = [];
  req.on('data', async (chunk) => chunks.push(chunk));
  req.on('end', () => {
    const body = Buffer.concat(chunks);
    cb(JSON.parse(body));
  });
};
