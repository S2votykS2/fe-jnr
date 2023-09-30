import axios from "axios";

const apiRegister = (data) => {
  return axios.post("http://localhost:8081/api/register", {
    email: data.email,
    password: data.password,
    rePassword: data.rePassword,
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    address: data.address,
    phoneNumber: data.phoneNumber,
  });
};
const apiLogin = (data) => {
  return axios.post(
    "http://localhost:8081/api/login",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );
};

const apiLogout = (data) => {
  return axios.post("http://localhost:8081/api/logout");
};

const displayUserWithPagination = (page, limit) => {
  return axios.get(
    `http://localhost:8081/api/read-user-page?page=${page}&limit=${limit}`,
    { withCredentials: true },

    {
      page,
      limit,
    },
    { withCredentials: true }
  );
};

const createNewUser = (data) => {
  return axios.post(
    "http://localhost:8081/api/create-user",
    {
      email: data.email,
      password: data.password,
      rePassword: data.rePassword,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      address: data.address,
      phoneNumber: data.phoneNumber,
    },
    { withCredentials: true }
  );
};

const updateUser = (data) => {
  return axios.put(
    "http://localhost:8081/api/update-user",
    {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      address: data.address,
      groupId: data.groupId,
    },
    { withCredentials: true }
  );
};
const deleteUser = (id) => {
  return axios.delete(
    `http://localhost:8081/api/delete-user?id=${id}`,
    {
      id,
    },
    { withCredentials: true }
  );
};

const getAllGroup = () => {
  return axios.get(`http://localhost:8081/api/get-all-group`, {});
};
export {
  apiRegister,
  apiLogin,
  apiLogout,
  displayUserWithPagination,
  createNewUser,
  deleteUser,
  getAllGroup,
  updateUser,
};
