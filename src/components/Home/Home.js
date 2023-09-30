import "./Home.scss";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const history = useHistory;
  // useEffect(() => {
  //   history.push("/login");
  // }, []);

  return <div> Home page </div>;
};
export default Home;
