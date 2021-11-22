import express from "express";
import cors from "cors";
import { createServer } from "http";
import socket from "socket.io";

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = socket(httpServer, { cors: { origin: "*" }});

export {
  httpServer,
  io,
}