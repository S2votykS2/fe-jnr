import Nav from "../../components/Navigation/Nav";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { displayUserWithPagination } from "../../services/apiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./User.scss";
const User = (props) => {
  const history = useHistory();
  let isLogin = sessionStorage.getItem("account");
  useEffect(() => {
    if (!isLogin) {
      history.push("/login");
    }
    fetchUser();
  }, []);

  const fetchUser = async () => {
    let data = await displayUserWithPagination(page, limit);
    if (data && data.data && data.data.code === 0) {
      setUsers(data.data.data.rows);
      setTotalPage(data.data.data.totalPage);
    }
  };
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [users, setUsers] = useState([]);

  const handlePageClick = async (event) => {
    let data = await displayUserWithPagination(+event.selected + 1, limit);
    if (data && data.data && data.data.code === 0) {
      setUsers(data.data.data.rows);
    }
  };
  console.log("check users", users);
  return (
    <div className="user-container">
      <Nav />
      <div className="container">
        <button type="button" class="btn btn-primary mt-4">
          {" "}
          Primary{" "}
        </button>{" "}
        <table class="table table-hover">
          <thead>
            <tr className="table-info">
              <th scope="col"> # </th> <th scope="col"> Email </th>{" "}
              <th scope="col"> FirstName </th> <th scope="col"> LastName </th>{" "}
              <th scope="col"> Gender </th> <th scope="col"> PhoneNumber </th>{" "}
              <th scope="col"> Address </th> <th scope="col"> Group </th>{" "}
              <th scope="col"> Active </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {users && users.length > 0 ? (
              users.map((item, index) => {
                return (
                  <tr>
                    <th scope="row"> {item.id} </th> <td> {item.email} </td>{" "}
                    <td> {item.firstName} </td> <td> {item.lastName} </td>{" "}
                    <td> {item.gender} </td> <td> {item.phoneNumber} </td>{" "}
                    <td> {item.address} </td> <td> {item.group.name} </td>{" "}
                    <td> Fontawesome chua customize </td>{" "}
                  </tr>
                );
              })
            ) : (
              <tr key=""> NOT FOUND USER </tr>
            )}{" "}
          </tbody>{" "}
        </table>{" "}
        <ReactPaginate
          className="customize-paginate"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={totalPage}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default User;
