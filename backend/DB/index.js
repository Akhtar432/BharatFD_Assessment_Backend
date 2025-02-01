import mongoose from "mongoose";
import dotenv from "dotenv";
import AdminSchema from "./Schemas/AdminSchema.js";
import FAQSchema from "./Schemas/FAQSchema.js";

dotenv.config(); // Load environment variables

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected! Attempting to reconnect...");
});

const Admin = mongoose.model("Admin", AdminSchema);
const FAQ = mongoose.model("FAQ", FAQSchema);

export { Admin, FAQ };
