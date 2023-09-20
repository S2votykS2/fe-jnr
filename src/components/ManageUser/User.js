import Nav from "../../components/Navigation/Nav";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { displayUserWithPagination } from "../../services/apiService";
import ModalCreateUser from "./Modal/ModalCreateUser";
import ModalDeleteUser from "./Modal/ModalDeleteUser";
import ModalUpdateUser from "./Modal/ModalUpdateUser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEdit,
  faTrash,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./User.scss";
import { add } from "lodash";
const User = (props) => {
  const history = useHistory();
  let isLogin = sessionStorage.getItem("account");
  useEffect(() => {
    if (!isLogin) {
      history.push("/login");
    }
    fetchDisplayUsers();
  }, []);

  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [users, setUsers] = useState([]);

  const [openModalDeleteUser, setOpenModalDeleteUser] = useState(false);

  const fetchDisplayUsers = async () => {
    let data = await displayUserWithPagination(page, limit);
    if (data && data.data && data.data.code === 0) {
      setUsers(data.data.data.rows);
      setTotalPage(data.data.data.totalPage);
    }
  };
  const handlePageClick = async (event) => {
    let data = await displayUserWithPagination(+event.selected + 1, limit);
    if (data && data.data && data.data.code === 0) {
      setUsers(data.data.data.rows);
    }
  };
  const handleDeleteUser = async (item) => {
    setEmail(item.email);
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setGender(item.gender);
    setAddress(item.address);
    setPhoneNumber(item.phoneNumber);

    openModalDeleteUserF();
  };
  const openModalDeleteUserF = (openModalDeleteUser) => {
    setOpenModalDeleteUser(!openModalDeleteUser);
  };

  const handleUpdateUser = (item) => {
    setEmail(item.email);
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setGender(item.gender);
    setAddress(item.address);
    setPhoneNumber(item.phoneNumber);
  };
  return (
    <div className="user-container">
      <Nav />
      <div className="container">
        <ModalCreateUser />{" "}
        <ModalDeleteUser
          email={email}
          openModalDeleteUser={openModalDeleteUser}
          openModalDeleteUserF={openModalDeleteUserF}
        />{" "}
        <ModalUpdateUser
          data={{ email, firstName, lastName, gender, address, phoneNumber }}
        />{" "}
        <table class="table table-hover mb-4">
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
                    <td>
                      <FontAwesomeIcon
                        icon={faEdit}
                        style={{
                          color: "#888",
                          fontSize: "20px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleUpdateUser(item)}
                      />{" "}
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                          color: "#888",
                          fontSize: "20px",
                          marginLeft: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteUser(item)}
                      />{" "}
                    </td>{" "}
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
          nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={totalPage}
          previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
          renderOnZeroPageCount={null}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default User;
