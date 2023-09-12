import app from "./app";
import http from "http";
import { Server as socketServer } from "socket.io";
import { connectDB } from "./db";
import sockets from "./sockets";

connectDB();
const server = http.createServer(app);
const httpServer = server.listen(8080, () => {
  console.log("-> server running on port 8080");
});

const io = new socketServer(httpServer);
sockets(io);
