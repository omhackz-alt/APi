export default async function handler(req, res) {
  const start = Date.now();

  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection?.remoteAddress ||
    "Unknown";

  let timezone = "UTC";

  try {
    const geo = await fetch(`http://ip-api.com/json/${ip}`).then(r => r.json());
    if (geo.timezone) timezone = geo.timezone;
  } catch (err) {
    timezone = "UTC";
  }

  if (req.query.tz) {
    timezone = req.query.tz;
  }

  const now = new Date();

  const response = {
    success: true,
    ip,
    timezone,
    utc_time: now.toISOString(),
    local_time: now.toLocaleString("en-US", { timeZone: timezone }),
    offset: Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "short"
    }).format(now),
    latency: Date.now() - start + "ms"
  };

  res.status(200).json(response);
}
