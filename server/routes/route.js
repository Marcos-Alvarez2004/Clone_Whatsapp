// GENERAL
import express from "express";
// CONTROLLER USER
import { addUser, getUsers } from "../controller/user-controller.js";
// CONTROLLER CONVERSATION
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
// CONTROLLER MESSAGE
import { newMessage, getMessages } from "../controller/message-controller.js";
// CONTROLLER UPLOADFILE
import { uploadFile, getImage } from "../controller/image-controller.js";
// UPLOAD MIDDLEWARE
import upload from "../utils/upload.js";

const route = express.Router();

// ROUTE

// USERS
route.post("/add", addUser);
route.get("/users", getUsers);
// CONVERSATION
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
// MESSAGES
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);
// FILE
route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getImage);

export default route;
