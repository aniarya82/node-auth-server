import bcrypt from "bcrypt";
import User from "../models/user.js";

function alert(err) {
  console.log("Error : Promise unhandled ", err);
}

const login = async function(req, res) {
  console.log(JSON.stringify(req.body));
  var success = false;
  var result = {};
  User.findOne({ mobno: req.body.mobno })
    .then(user => {
      if (user == null) {
        result = { msg: "No user found" };
        res.json({ success: success, data: result });
      }
      console.log("User from db", JSON.stringify(user));
      bcrypt
        .compare(req.body.password, user.password)
        .then(match => {
          if (match) {
            success = true;
            result = user;
            res.json({ success: success, data: result });
            //   res.clearCookie("user");
            //   res.cookie("user", user, { maxAge: 360000 });
          } else {
            result = { msg: "Credential mismatch" };
            res.json({ success: success, data: result });
          }
        })
        .catch(err => alert(err));
    })
    .catch(err => alert(err));
};
export default login;
