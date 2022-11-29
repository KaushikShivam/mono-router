module.exports = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-type': 'application/json',
  });
  res.write(JSON.stringify(data));
  res.end();
};
