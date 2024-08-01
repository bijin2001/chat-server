const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    console.log("user connected:",socket.id);
    
socket.on("message",(message)=>{
    io.emit("message",message)
})

socket.on("disconnect",()=>{
    console.log('user disconnected',socket.id);
})
});

httpServer.listen(3000, () => {
    console.log("listening on : 3000");
});

