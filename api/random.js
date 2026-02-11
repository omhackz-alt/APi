export default function handler(req, res) {
  const min = parseInt(req.query.min) || 0;
  const max = parseInt(req.query.max) || 100;

  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  res.status(200).json({
    success: true,
    min,
    max,
    result: random
  });
}
