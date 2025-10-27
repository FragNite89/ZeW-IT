// /api/waste-log.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, type, amount } = req.body;

    // Basic validation
    if (!username || !type || !amount) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Here you can add database connection and save logic.
    // For now, just logging to console and returning success.
    console.log('Waste log received:', { username, type, amount });

    return res.status(200).json({ message: 'Waste log received successfully!' });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
