// One word for the boss: Echo.
// The boss who repeats your idea in the meeting as his own.
// Four letters, one habit, no explanation needed.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Echo");
