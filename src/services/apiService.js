import axios from "axios";

const apiRegister = (data) => {
    return axios.post('http://localhost:8081/api/register', {
        email: data.email,
        password: data.password,
        rePassword: data.rePassword,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        address: data.address,
        phoneNumber: data.phoneNumber
    });
}
const apiLogin = (data) => {
    return axios.post('http://localhost:8081/api/login', {
        email: data.email,
        password: data.password,
    });
}

export {
    apiRegister,
    apiLogin
}