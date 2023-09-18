import Nav from "../../components/Navigation/Nav";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
const User = (props) => {
  const history = useHistory();
  let isLogin = sessionStorage.getItem("account");
  useEffect(() => {
    if (!isLogin) {
      history.push("/login");
    }

  }, []);
  return (
    <div className="user-container">
      <Nav />
    </div>
  );
};

export default User;
