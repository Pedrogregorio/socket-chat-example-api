import express from "express";
import cors from "cors";
import { createServer } from "http";
import socket from "socket.io";

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = socket(httpServer, {
    cors: {
        origin: "*"
    },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const port = process.env.PORT || 3000;

httpServer.listen(port, () => console.log(`listening on port ${port}`));