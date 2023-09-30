import React, { useEffect } from "react";
import { useContext, useState } from "react";
import "./Nav.scss";
import { UserContext } from "../../UserContext";
import Nav from "react-bootstrap/Nav";
import { apiLogout } from "../../services/apiService";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function Navigation(props) {
  const user = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("Not Login");
  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, []);
  const handleLogout = async () => {
    let response = await apiLogout();
    if (response.data && response.data.code === 0) {
      sessionStorage.removeItem("account");
      history.push("/login");
      toast.success(response.data.message);
    }
    if (response.data && response.data.code !== 0) {
      toast.error("Happen error");
    }
  };
  return (
    <div className="topnav mb-4">
      <div className="container">
        <Nav variant="pills" activeKey="1">
          <div className="nav">
            <div className="left-header">
              <div className="1">
                <Nav.Item>
                  <Nav.Link eventKey="1" href="/">
                    Home{" "}
                  </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
              <div className="2">
                <Nav.Item>
                  <Nav.Link eventKey="2" title="Item" href="/user">
                    Users{" "}
                  </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
              <div className="3">
                <Nav.Item>
                  <Nav.Link eventKey="2" title="Item" href="/role">
                    Roles{" "}
                  </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
              <div className="3">
                <Nav.Item>
                  <Nav.Link eventKey="2" title="Item" href="/group">
                    Group{" "}
                  </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
              <div className="4">
                <Nav.Item>
                  <Nav.Link eventKey="2" title="Item" href="/project">
                    Projects{" "}
                  </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
              <div className="5">
                <Nav.Item>
                  <Nav.Link eventKey="2" title="Item" href="/about">
                    About{" "}
                  </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
            </div>{" "}
            <div className="right-header">
              <div className="3">
                <Nav.Item>
                  <Nav.Link eventKey="3" disabled>
                    Welcome to {email}{" "}
                  </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
              <div className="4">
                <Nav.Item as="li">
                  <Nav.Link onClick={handleLogout}> Logout </Nav.Link>{" "}
                </Nav.Item>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </Nav>{" "}
      </div>{" "}
    </div>
  );
}

export default Navigation;
