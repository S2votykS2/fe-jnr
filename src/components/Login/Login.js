import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiLogin } from "../../services/apiService";

function Login() {
  const history = useHistory();
  let isLogin = sessionStorage.getItem("account");
  useEffect(() => {
    if (isLogin) {
      history.push("/user");
    }
  }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = () => {
    history.push("/register");
  };
  const isValidLogin = () => {
    let isValid = true;
    if (!email) {
      toast.info("Missing email required");
      isValid = false;
    }
    if (!password) {
      toast.info("Missing password required");
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = async () => {
    let check = isValidLogin();
    if (check) {
      let data = {
        email,
        password,
      };
      let response = await apiLogin(data);
      if (response.data && response.data.code === 0) {
        let data = {
          isLogin: "true",
          token: "fake token",
        };
        sessionStorage.setItem("account", JSON.stringify(data));
        history.push("/user");
      }
      if (response.data && response.data.code !== 0) {
        toast.error(response.data.message);
      }
    }
  };

  const handlePressEnter = async (e) => {
    if (e.charCode === 13) {
      handleLogin();
    }
  };

  return (
    <div className="login-container mt-4">
      <div className="container">
        <div className="row ">
          <div className="col-7">
            <div className="header"> ReactJS - JWT - NodeJS </div>{" "}
            <div className="description">
              Web programming helps you connect and share with the people in
              your life.{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-5 shadow p-3 mb-5 bg-body rounded">
            <input
              className="form-control form-control-lg my-3"
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />{" "}
            <input
              className="form-control form-control-lg my-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={(e) => handlePressEnter(e)}
            />{" "}
            <button
              type=""
              className="form-control form-control-lg my-3 btn btn-primary"
              onClick={handleLogin}
            >
              Login{" "}
            </button>{" "}
            <a href="/"> Forgotten password ? </a>{" "}
            <button
              type=""
              className="form-control form-control-lg my-3 btn btn-success"
              onClick={() => handleRegister()}
            >
              Register{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
