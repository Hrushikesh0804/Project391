import { connectToDatabase } from "./db";
import User from "./models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  await connectToDatabase();
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  res.status(200).json({ user });
}
