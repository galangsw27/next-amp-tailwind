// pages/api/redirect.js

export default async function handler(req, res) {
  const { type } = req.query;

  let targetUrl = '';
  const fallbackUrls = [
    'https://kedanjos27.org/',
    'https://kedanjos11.co/',
    'https://kedanjos02.com',
    'https://kedanjos02.lol',
    'https://kedanjos02.blog',
    'https://kedanjos02.ink',
    'https://kedanjos02.site',
    'https://kedanjos02.store',
    'https://kedanjos02.xyz',
  ];

  switch (type) {
    case 'register':
      targetUrl = 'https://kedanjos27.org/index.html#/register';
      break;
    case 'rtp':
      targetUrl = 'xn---kedanjos-9340a.site'; // Replace with your desired URL
      break;
    case 'alternative':
      targetUrl = 'https://kedanjos.com/';
      break;
    default:
      return res.status(400).json({ error: 'Invalid type' });
  }

  if (type === 'alternative') {
    try {
      const response = await fetch(targetUrl, { method: 'HEAD' });
      if (response.ok) {
        res.status(200).json({ redirectUrl: targetUrl });
        return;
      } else {
        throw new Error('Primary URL is not accessible');
      }
    } catch (error) {
      for (const fallbackUrl of fallbackUrls) {
        try {
          const response = await fetch(fallbackUrl, { method: 'HEAD' });
          if (response.ok) {
            res.status(200).json({ redirectUrl: fallbackUrl });
            return;
          }
        } catch (error) {
          // Continue to the next fallback URL if this one fails
        }
      }
      // If no URL was accessible, return a 502 Bad Gateway error
      return res.status(502).json({ error: 'No accessible URLs' });
    }
  } else {
    res.status(200).json({ redirectUrl: targetUrl });
  }
}
