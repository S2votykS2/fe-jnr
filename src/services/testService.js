import axios from "axios";

const handleRegister = (data) => {
    return axios.get('http://localhost:8081/api/register', data);
}

module.exports = {
    handleRegister
}