import bcrypt from "bcrypt";
import User from "../models/user.js";

const register = async function(req, res) {
  console.log("Register Request", JSON.stringify(req.body));
  let success = false;
  let result = {};
  try {
    if (JSON.stringify(req.body) == "{}") {
      console.log("Empty body recieved");
      result = { msg: "Empty body" };
    } else {
      var pswd = req.body.password;
      var hash = bcrypt.hashSync(pswd, 10);
      // Here I have used Mongo directly
      // But one can use an API to send request
      // And wait till you have a success
      var user = new User({
        name: req.body.name,
        mobno: req.body.mobno,
        password: hash
      });
      result = await user.save();
      if (Object.keys(result).length > 0) success = true;
    }
  } catch (e) {
    console.log("Error in catch block");
  }
  res.json({ success: success, data: result });
};
export default register;
