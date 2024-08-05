// pages/api/redirect.js

export default function handler(req, res) {
  const { type } = req.query;

  let targetUrl = '';

  switch (type) {
    case 'register':
      targetUrl = 'https://kedanjos27.org/index.html#/register';
      break;
    case 'rtp':
      targetUrl = 'https://your-redirect-url.com'; // Replace with your desired URL
      break;
    case 'alternative':
      targetUrl = 'https://kedanjos11.co/#/index?category=home';
      break;
    default:
      return res.status(400).json({ error: 'Invalid type' });
  }

  res.writeHead(302, { Location: targetUrl });
  res.end();
}
