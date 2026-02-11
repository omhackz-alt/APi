export default function handler(req, res) {
  const start = process.hrtime.bigint();

  const end = process.hrtime.bigint();
  const latency = Number(end - start) / 1_000_000;

  res.status(200).json({
    success: true,
    latency: latency.toFixed(3) + "ms",
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || "unknown"
  });
}
