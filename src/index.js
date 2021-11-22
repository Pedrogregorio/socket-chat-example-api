import { httpServer } from "./server";
import './socket';

const port = process.env.PORT || 3000;

httpServer.listen(port, () => console.log(`listening on port ${port}`));

function getMessages(room) {
  return messages.filter(message => message.room === room);
}