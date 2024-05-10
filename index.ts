const pastMessages: any[] = [];

const server = Bun.serve({
  port: 3000,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("This is a websocket server");
  },
  websocket: {
    open(ws) {
      ws.subscribe("chat");
      for (const message of pastMessages) {
        ws.send(message);
      }
    },
    message(ws, message) {
      pastMessages.push(message);
      server.publish("chat", message);
    },
    close(ws) {
      ws.unsubscribe("chat");
    },
  },
});
