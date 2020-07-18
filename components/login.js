import bcrypt from "bcrypt";

const login = async function(res, req) {
  console.log(JSON.stringify(req.body));
  var success = false;
  var result = {};
  try {
    // Here I have used Mongo directly
    // But one can use an API to send request
    // And wait till you have a success
    user = await User.findOne({ mobno: req.body.mobno });
    if (bcrypt.compareSync(req.body.password, user.password)) {
      success = true;
      result = user;
      //   res.clearCookie("user");
      //   res.cookie("user", user, { maxAge: 360000 });
    } else {
      console.log("Credential mismatch");
      result = { msg: "Credential mismatch" };
    }
  } catch (e) {
    console.log("error in try catch block");
  }
  res.json({ success: success, data: result });
};
export default login;
