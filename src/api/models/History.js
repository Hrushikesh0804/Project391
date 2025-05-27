import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.History || mongoose.model("History", HistorySchema);
