import axios from "axios";

export const sendMail = (data: any) => {
  return axios.post("https://todo.protactics.ru/mail", data);
};
