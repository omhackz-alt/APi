export default function handler(req, res) {
  res.status(200).json({
    success: true,
    status: "OmHackz-API is running",
    timestamp: new Date().toISOString()
  });
}
