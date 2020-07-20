import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/test", { useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", function() {
  console.log("Connection established");
});
const UserSchema = new mongoose.Schema({
  name: String,
  mobno: Number,
  password: String
});
export default mongoose.model("User", UserSchema);
