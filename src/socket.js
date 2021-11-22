import { io } from "./server";

const users = [];
const messages = [];

io.on("connection", (socket) => {
  socket.on("join_room", (data, callback) => {
    socket.join(data.room);
    const userInRoom = users.find(user => user.name === data.name && user.room === data.room);
    if (userInRoom) return userInRoom.id = socket.id;

    users.push({
      id: socket.id,
      name: data.name,
      room: data.room,
    })
    const messagesInRoom = getMessages(data.room);
    callback(messagesInRoom);
  })
  socket.on("send_message", (data) => {
    messages.push({
      ...data,
      createdAt: new Date().toLocaleString()
    })
    io.to(data.room).emit("receive_message", data);
  });
});

function getMessages(room) {
  return messages.filter(message => message.room === room);
}