export default function handler(req, res) {
  const start = Date.now();
  let now = new Date();

  const format = req.query.format || "default";
  const addDays = parseInt(req.query.add) || 0;

  if (addDays) {
    now.setDate(now.getDate() + addDays);
  }

  let output;

  switch (format) {
    case "iso":
      output = now.toISOString();
      break;
    case "unix":
      output = Math.floor(now.getTime() / 1000);
      break;
    case "full":
      output = now.toString();
      break;
    default:
      output = now.toDateString();
  }

  res.status(200).json({
    success: true,
    format,
    added_days: addDays,
    result: output,
    latency: Date.now() - start + "ms"
  });
}
