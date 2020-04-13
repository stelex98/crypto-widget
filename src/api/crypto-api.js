import SocketMethodsHandler from './connection/websoket-handler';

export const CryptoApi = {
    createCryptoSocket(cb) {
        const cs = new SocketMethodsHandler('wss://ws.kraken.com/', cb);

        return data => {
            cs.callMethod(data);
        }
    }
}