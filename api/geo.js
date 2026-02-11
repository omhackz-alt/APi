export default async function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection?.remoteAddress ||
    "";

  try {
    const geo = await fetch(`http://ip-api.com/json/${ip}`).then(r => r.json());

    res.status(200).json({
      success: true,
      ip,
      country: geo.country,
      city: geo.city,
      timezone: geo.timezone,
      isp: geo.isp
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
}
