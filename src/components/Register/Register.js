import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiRegister } from "../../services/apiService";

function Register() {
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {}, [setEmail, setPassword]);

  const isValidInputs = () => {
    let isValid = true;
    if (!email) {
      toast.info("Missing email required");
      isValid = false;
    }
    if (!password) {
      toast.info("Missing password required");
      isValid = false;
    }
    if (!rePassword) {
      toast.info("Missing rePassword required");
      isValid = false;
    }
    if (!firstName) {
      toast.info("Missing firstName required");
      isValid = false;
    }
    if (!lastName) {
      toast.info("Missing lastName required");
      isValid = false;
    }
    if (!gender) {
      toast.info("Missing gender required");
      isValid = false;
    }
    if (!phoneNumber) {
      toast.info("Missing PhoneNumber required");
      isValid = false;
    }
    if (password !== rePassword) {
      toast.info("RePassword not invalid");
      isValid = false;
    }
    return isValid;
  };
  const handleRegister = async () => {
    let check = isValidInputs();
    if (check) {
      let userData = {
        email,
        password,
        rePassword,
        firstName,
        lastName,
        gender,
        address,
        phoneNumber,
      };
      let response = await apiRegister(userData);
      if (response.data && response.data.code === 0) {
        toast.success("Your account is created");
      }
      if (response.data && response.data.code !== 0) {
        toast.error(response.data.message);
      }
    }
  };

  return (
    <div className="login-container mt-4">
      <div className="container">
        <div className="row ">
          <div className="col-7">
            <div className="header"> ReactJS - JWT - NodeJS </div>{" "}
            <div className="description">
              Web programming helps you connect and share with the people in
              your life.{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-5 shadow p-3 mb-5 bg-body rounded">
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
            <button
              className="form-control my-4 btn btn-primary"
              onClick={() => handleRegister()}
            >
              {" "}
              Register{" "}
            </button>{" "}
            <button
              className="form-control mt-4 btn btn-success"
              onClick={() => handleLogin()}
            >
              Return to Login{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Register;
