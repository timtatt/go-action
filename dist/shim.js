const { spawn } = require("child_process");
const path = require("path");

// Resolve the binary path (relative to this script)
const binaryPath = path.resolve(__dirname, "./action");

// Forward CLI args
const args = process.argv.slice(2);

// Spawn the binary
const proc = spawn(binaryPath, args, {
  stdio: "inherit",
});

proc.on("exit", (code) => {
  process.exit(code);
});
