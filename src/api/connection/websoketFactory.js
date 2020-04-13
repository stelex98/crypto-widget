class ISocket {
  constructor(websoketUrl, callback) {
    this.RECONNECTION_INTERVAL = 1000;

    this.WEBSOCKET_URL = websoketUrl;

    this.socket = {};

    this.setSocketConnection(callback);
  }

  close() {
    this.socket.close();
  }

  emit(data) {
    const stringifiedData = JSON.stringify(data);

    this.socket.readyState === WebSocket.OPEN
      ? this.socket.send(stringifiedData)
      : setTimeout(() => this.emit(data), this.RECONNECTION_INTERVAL);
  }

  setSocketConnection(callback) {
    this.socket = new WebSocket(`${this.WEBSOCKET_URL}`)

    this.socket.addEventListener('close', this.close.bind(this));
    this.socket.addEventListener('message', callback);
  }
}

export default ISocket;