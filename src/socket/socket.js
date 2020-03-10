import io from 'socket.io-client';

/*const socket = io(window.location.origin.replace('3000','3004'));*/
const socket = io('https://social-network.samuraijs.com/api/1.0');

export default socket;