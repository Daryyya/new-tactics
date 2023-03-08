import axios from "axios";

export const sendMail = (data: any) => {
    return axios.post("http://85.193.80.64:5000/mail", data)
}