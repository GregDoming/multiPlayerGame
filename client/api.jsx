import ioClient from 'socket.io-client'
const socket = io('http://localhost:3000');



function numberOfUsers(connection) {
    socket.on('connect')
}

export { numberOfUsers }