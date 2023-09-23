import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteUser } from "../../../services/apiService";
import { toast } from "react-toastify";

function ModalDeleteUser(props) {
  useEffect(() => {}, []);
  const toggle = () => props.openModalDeleteUserF(props.openModalDeleteUser);

  const handleDeleteUser = async () => {
    let response = await deleteUser(props.id);
    if (response.data && response.data.code === 0) {
      toast.success(response.data.message);
    }
    if (response.data && response.data.code !== 0) {
      toast.error(response.data.message);
    }
    toggle();
  };
  return (
    <div>
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
