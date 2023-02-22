import { greet } from "./greet.ts";

import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";

Deno.test("greet test", () => {
  const greeting = greet("Karni");
  assertEquals(greeting, "Hello, Karni");
});

Deno.test("greet test 2", () => {
  const greeting = greet("ACM at CSUF!");
  assertEquals(greeting, "Hello, ACM at CSUF!");
});

Deno.test("greet test 2", () => {
  const greeting = greet("Ethan");
  assertEquals(greeting, "Hello, Ethan");
});
