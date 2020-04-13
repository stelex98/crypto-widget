import ISocket from './websoketFactory';

class SocketMethodsHandler {
  constructor(websoketUrl, callback) {
    this.socket = new ISocket(websoketUrl, callback);
  }

  callMethod(data) {
    let { socket } = this;

    socket.emit(data)
  }
}

export default SocketMethodsHandler;