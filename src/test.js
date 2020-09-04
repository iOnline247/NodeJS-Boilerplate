// https://nodejs.org/api/util.html#util_util_format_format_args
// util.format() is a synchronous method that is intended as a debugging tool.
// Some input values can have a significant performance overhead that can block
// the event loop. Use this function with care and never in a hot code path.
const { format } = require("util");

function log(...args) {
  const msg = format("%j %s %s %s", ...args);
  const msg2 = format(...args);

  process.stdout.write(`${msg}\n`);
  process.stdout.write(`${msg2}\n`);
}

log(
  { test: true, whoops: false },
  "test",
  Symbol("key"),
  Buffer.from("oh no").toString("hex"),
  new Error("not good")
);
