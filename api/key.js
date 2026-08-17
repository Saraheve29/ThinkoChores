export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  const key = process.env.ANTHROPIC_API_KEY || '';
  if (!key) { res.status(500).json({ error: 'API key not configured' }); return; }
  res.status(200).json({ key });
}
