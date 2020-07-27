import { v4 as uuidv4 } from "uuid";
import Logger from "./logger.js";

const logger = new Logger({
  appName: "nodejs-boilerplate",
  component: "Typescript",
  module: "DX",
  correlationId: uuidv4(),
  jobId: uuidv4(),
});

logger.on(Logger.EVENTS.LOGGING, async (payload) => {
  console.log(`Logger event fired: ${Logger.EVENTS.LOGGING}`);
  console.log(payload);
});

logger.on(Logger.EVENTS.LOGGED, async (payload) => {
  console.log(`Logger event fired: ${Logger.EVENTS.LOGGED}`);
  console.log(payload);
});

logger.log("Hola, Mundo");
logger.error("NOPE");

// Param shadowing test.
function test(logger) {
  logger = null;

  console.log(logger);
}

test("test");