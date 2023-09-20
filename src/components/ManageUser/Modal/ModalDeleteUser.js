import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalDeleteUser(props) {
  useEffect(() => {}, []);
  const toggle = () => props.openModalDeleteUserF(props.openModalDeleteUser);

  const handleDeleteUser = () => {
    console.log("check props", props);
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Delete{" "}
      </Button>{" "}
      <Modal isOpen={props.openModalDeleteUser} toggle={toggle}>
        <ModalHeader toggle={toggle}> Modal title </ModalHeader>{" "}
        <ModalBody> Do you want to delete {props.email} ? </ModalBody>{" "}
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleDeleteUser();
            }}
          >
            Delete{" "}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel{" "}
          </Button>{" "}
        </ModalFooter>{" "}
      </Modal>{" "}
    </div>
  );
}

export default ModalDeleteUser;
