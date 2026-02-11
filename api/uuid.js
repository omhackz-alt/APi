import { randomUUID } from "crypto";

export default function handler(req, res) {
  res.status(200).json({
    success: true,
    uuid: randomUUID()
  });
}
