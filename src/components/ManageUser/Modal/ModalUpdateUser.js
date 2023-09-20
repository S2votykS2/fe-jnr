import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalUpdateUser(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useEffect(() => {}, []);

  const handleUpdateUser = () => {
    console.log("check props", props);
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Update{" "}
      </Button>{" "}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Modal title </ModalHeader>{" "}
        <ModalBody> code </ModalBody>{" "}
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
