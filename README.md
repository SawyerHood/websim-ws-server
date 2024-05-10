# websim-server

This is a very minimal websocket server that I've been using with websim.

## Run locally

```
bun i
bun index.ts
```

## Run in production

Sign up for Fly.io and install the [Fly CLI](https://fly.io/docs/hands-on/install-flyctl/).

You should then be able to deploy the app with:

```
fly auth login
fly deploy
```

## Prompting WebSim

I've had luck with the query param `connectToWebsocket=wss://<app-name>.fly.dev`.

If you want to connect locally you can use `connectToWebsocket=ws://localhost:3000`.
