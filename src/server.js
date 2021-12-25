import express from "express";
import cors from "cors";
import { createServer } from "http";
import socket from "socket.io";

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  }
});

export {
  httpServer,
  io,
}