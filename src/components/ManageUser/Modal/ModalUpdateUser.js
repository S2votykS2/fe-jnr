import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getAllGroup, updateUser } from "../../../services/apiService";
import { toast } from "react-toastify";

function ModalUpdateUser(props) {
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  // const [groupName, setGroupName] = useState();
  // const [groupDescription, setGroupDescription] = useState();

  const [groups, setGroups] = useState();

  const toggle = () => {
    props.openModalUpdateUserF(props.openModalUpdateUser);
  };

  useEffect(() => {
    setId(props.data.id);
    setEmail(props.data.email);
    setFirstName(props.data.firstName);
    setLastName(props.data.lastName);
    setGender(props.data.gender);
    setAddress(props.data.address);
    setPhoneNumber(props.data.phoneNumber);
    // setGroupName(props.data.group);
    // setGroupDescription(props.data.group);
    fetchGetAllGroup();
  }, [props]);

  let fetchGetAllGroup = async () => {
    let response = await getAllGroup();
    if (response.data && response.data.code === 0) {
      setGroups(response.data.data);
    }
  };
  const handleUpdateUser = async () => {
    let data = {
      id,
      email,
      firstName,
      lastName,
      gender,
      address,
      phoneNumber,
      groupName: "hardcode",
      groupDescription: "hardcode",
    };
    let response = await updateUser(data);
    if (response.data && response.data.code === 0) {
      toast.success(response.data.message);
      toggle();
    }
    if (response.data && response.data.code !== 0) {
      toast.error(response.data.message);
    }
  };
  return (
    <div>
      <Modal isOpen={props.openModalUpdateUser} toggle={toggle}>
        <ModalHeader toggle={toggle}> Update User </ModalHeader>{" "}
        <ModalBody>
          <div className="row">
            <div className="col-12">
              <label for="exampleFormControlInput1" className="form-label">
                {" "}
                Email{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                disabled
                value={email}
                // onChange={(event) => setAddress(event.target.value)}
              />{" "}
            </div>{" "}
            <div className="col-6">
              <label for="exampleFormControlTextarea1" className="form-label">
                {" "}
                FirstName{" "}
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />{" "}
            </div>{" "}
            <div className="col-6">
              <label for="exampleFormControlTextarea1" className="form-label">
                LastName{" "}
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />{" "}
            </div>{" "}
            <div className="col-6">
              <label for="exampleFormControlTextarea1" className="form-label">
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
            </div>{" "}
            <div className="col-6">
              <label for="exampleFormControlTextarea1" className="form-label">
                PhoneNumber{" "}
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />{" "}
            </div>{" "}
            {/* <div className="col-12">
                                                                                                              <label for="exampleFormControlTextarea1" className="form-label">
                                                                                                                Group{" "}
                                                                                                              </label>{" "}
                                                                                                              <select
                                                                                                                className="form-select"
                                                                                                                value={groupName}
                                                                                                                onChange={() => setGroupName(groupName)}
                                                                                                              >
                                                                                                                <option> Select group </option>{" "}
                                                                                                                {groups &&
                                                                                                                  groups.length > 0 &&
                                                                                                                  groups.map((item, index) => {
                                                                                                                    return (
                                                                                                                      <option value={item.name}> {item.description} </option>
                                                                                                                    );
                                                                                                                  })}{" "}
                                                                                                              </select>{" "}
                                                                                                            </div>{" "} */}{" "}
          </div>{" "}
        </ModalBody>{" "}
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleUpdateUser();
            }}
          >
            Update{" "}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel{" "}
          </Button>{" "}
        </ModalFooter>{" "}
      </Modal>{" "}
    </div>
  );
}

export default ModalUpdateUser;
