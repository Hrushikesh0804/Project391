import { connectToDatabase } from "./db";
import History from "./models/History";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    const history = await History.find();
    res.status(200).json({ history });
  } else if (req.method === "POST") {
    const { email, message } = req.body;
    const newHistory = new History({ email, message });
    await newHistory.save();
    res.status(201).json({ message: "History saved" });
  } else {
    res.status(405).end();
  }
}
