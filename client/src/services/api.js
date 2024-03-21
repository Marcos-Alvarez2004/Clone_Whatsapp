import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while addUser API", error.message);
  }
};

export const getUsers = async () => {
  try {
    let res = await axios.get(`${url}/users`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("Error: getUsers API", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error: setConversation API", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let res = await axios.post(`${url}/conversation/get`, data);
    return res.data;
  } catch (error) {
    console.log("Error: getConversation API", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    let res = await axios.post(`${url}/message/add`, data);
    return res.data;
  } catch (error) {
    console.log("Error: newMessage API", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error: getMessages API", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error uploadFile API ", error);
  }
};
