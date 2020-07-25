import { v4 as uuidv4 } from "uuid";
import Logger from "./logger.js";

const logger = new Logger({
    appName: "nodejs-boilerplate",
    component: "Typescript",
    module: "DX",
    correlationId: uuidv4(),
    jobId: uuidv4()
});

logger.on(Logger.EVENTS.LOGGED, async (payload) => {
    console.log(`Logger event fired: ${Logger.EVENTS.LOGGED}`);
    console.log(payload);

    debugger;
});

logger.log("Hola, Mundo");
