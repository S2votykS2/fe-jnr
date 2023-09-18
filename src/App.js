import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import User from "./components/ManageUser/User";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
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
        </div>{" "}
      </Router>{" "}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
