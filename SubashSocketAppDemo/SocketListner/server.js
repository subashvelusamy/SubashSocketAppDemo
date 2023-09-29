const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer((req, res) => {
  console.log('Testing');
});

server.listen(1979, () => {
    console.log('WebSocket server is listening on port 1979');
});

const wsServer = new WebSocketServer({
    httpServer: server
});

const clients = [];

wsServer.on('request', (request) => {
    const connection = request.accept(null, request.origin);
    clients.push(connection);

    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            try {             
                     
                  clients.forEach(client => {
                      if (client !== connection && client.connected) {
                          client.sendUTF(message.utf8Data);
                      }
                  });          
                
            } catch (error) {
                console.error('Data issue:', error);
            }
        }
    });

    connection.on('close', () => {       
        clients.splice(clients.indexOf(connection), 1);
    });
});
