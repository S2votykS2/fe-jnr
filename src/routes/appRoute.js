import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import User from "../components/ManageUser/User";

function AppRoute() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/news"> News </Route>{" "}
          <Route path="/contact"> Contact </Route>{" "}
          <Route path="/about"> About </Route>{" "}
          <Route path="/login">
            <Login />
          </Route>{" "}
          <Route path="/user">
            <User />
          </Route>{" "}
          <Route path="/register">
            <Register />
          </Route>{" "}
          <Route path="/" exact>
            Home{" "}
          </Route>{" "}
          <Route path="*"> 404 NOT FOUND </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </>
  );
}

export default AppRoute;
