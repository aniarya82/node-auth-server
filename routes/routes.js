import Login from "../components/login";
import Register from "../components/register";

const routes = app => {
  app.get("/", (req, res) => {
    res.json({ message: "Hellloooo fromm routes" });
  });
  app.post("/auth/login", Login);
  app.post("/auth/register", Register);
};
export default routes;
