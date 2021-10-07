import socketSubscribe from "./utils/socketSubscribe";

const socket = new WebSocket('wss://ws.iqoption.com/echo/websocket');

socket.onopen = _ => {
    socket.send("{\"name\":\"authenticate\",\"request_id\":\"1631649945_706275013\",\"local_time\":29017,\"msg\":{\"ssid\":\"652f8978ea311db6c2a1263b1e5f19cc\",\"protocol\":3,\"session_id\":\"\",\"client_session_id\":\"\"}}");
};
socket.onmessage = event => socketSubscribe(JSON.parse(event.data))

export default socket;