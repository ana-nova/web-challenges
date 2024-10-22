import { Chance } from "chance";
import { createServer } from "node:http";

const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  const message = `Hello, my name is ${name}, I am ${age} years old, and I am a ${profession}.`;

  response.statusCode = 200;
  response.end(message);
});
