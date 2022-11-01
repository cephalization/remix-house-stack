import { createServer } from "./server";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 5001;
const server = createServer();

const listener = server.listen(port, () => {
  console.log(`api running on ${port}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  listener.close(() => {
    console.log("HTTP server closed");
  });
});
