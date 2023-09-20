import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { createNewUser } from "../../../services/apiService";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ModalCreateUser(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const handleCreateUser = () => {
    fetchCreateNewUser();
  };
  useEffect(() => {});
  const fetchCreateNewUser = async () => {
    let data = {
      email,
      password,
      rePassword,
      firstName,
      lastName,
      gender,
      address,
      phoneNumber,
    };
    let response = await createNewUser(data);
    if (response.data && response.data.code === 0) {
      toast.success("Create success new user");
      toggle();
      setEmail("");
      setPassword("");
      setRePassword("");
      setFirstName("");
      setLastName("");
      setGender("");
      setAddress("");
      setPhoneNumber("");
    }
    if (response.data && response.data.code !== 0) {
      toast.error(response.data.message);
    }
  };
  return (
    <div>
      <Button color="mt-4 btn btn-primary" onClick={toggle}>
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: "6px" }} />
        Create New User{" "}
      </Button>{" "}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}> Create New User </ModalHeader>{" "}
        <ModalBody>
          <div className="">
            <label for="exampleFormControlInput1" className="form-label">
              {" "}
              Email{" "}
            </label>{" "}
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />{" "}
            <label for="exampleFormControlInput1" class="form-label">
              {" "}
              Password{" "}
            </label>{" "}
            <input
              className="form-control mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />{" "}
            <label for="exampleFormControlInput1" class="form-label">
              {" "}
              Re - Password{" "}
            </label>{" "}
            <input
              className="form-control mb-3"
              type="password"
              placeholder="Re-Password"
              value={rePassword}
              onChange={(event) => setRePassword(event.target.value)}
            />{" "}
            <label for="exampleFormControlInput1" class="form-label">
              {" "}
              FirstName{" "}
            </label>{" "}
            <input
              className="form-control mb-3"
              type="text"
              placeholder="FirstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />{" "}
            <label for="exampleFormControlInput1" class="form-label">
              {" "}
              LastName{" "}
            </label>{" "}
            <input
              className="form-control mb-3"
              type="text"
              placeholder="LastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />{" "}
            <label for="exampleFormControlInput1" class="form-label">
              {" "}
              Gender{" "}
            </label>{" "}
            <select
              class="form-select"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option selected> Select gender </option>{" "}
              <option value="M"> Male </option>{" "}
              <option value="F"> Famale </option>{" "}
              <option value="O"> Other </option>{" "}
            </select>{" "}
            <label for="exampleFormControlInput1" class="form-label">
              {" "}
              Address{" "}
            </label>{" "}
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />{" "}
            <label for="exampleFormControlInput1" class="form-label">
              {" "}
              Phone Number{" "}
            </label>{" "}
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />{" "}
          </div>{" "}
        </ModalBody>{" "}
        <ModalFooter>
          <Button color="primary" onClick={() => handleCreateUser()}>
            Create User{" "}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel{" "}
          </Button>{" "}
        </ModalFooter>{" "}
      </Modal>{" "}
    </div>
  );
}

export default ModalCreateUser;
