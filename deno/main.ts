import { greet, serve } from "./deps.ts";

const port = 8080;

function handle(r: Request): Response {
  const url = new URL(r.url);

  // Ex: url.pathname == "/greet/karni"
  if (url.pathname.startsWith("/greet")) {
    const { 2: name } = url.pathname.split("/");
    const greeting = greet(name);
    return new Response(greeting, { status: 200 });
  }

  return new Response("Not found", { status: 404 });
}

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handle, { port });
