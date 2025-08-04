const { spawn } = require("child_process");
const path = require("path");

// Resolve binary path relative to this file
const binaryPath = path.resolve(__dirname, "./action");

// Pass all CLI arguments to the binary
const args = process.argv.slice(2);

// Spawn the binary
const proc = spawn(binaryPath, args, {
  stdio: "inherit",
  shell: false,
});

// Exit with the same code as the binary
proc.on("exit", (code) => process.exit(code));
proc.on("error", (err) => {
  console.error("Failed to start binary:", err);
  process.exit(1);
});
