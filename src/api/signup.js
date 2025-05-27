import { connectToDatabase } from "./db";
import User from "./models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  await connectToDatabase();
  const { name, email, password, lawStudentId } = req.body;

  if (!lawStudentId) return res.status(400).json({ message: "Law students only" });

  try {
    const user = new User({ name, email, password, lawStudentId });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ message: "User already exists or invalid data" });
  }
}
