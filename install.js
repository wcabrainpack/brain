#!/usr/bin/env node
/**
 * Jeremiah Krakowski Brain Pack — Auto-installer
 * Copies skill files to the correct location for Claude Code, OpenClaw, and other agents.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

const targets = [
  path.join(os.homedir(), '.claude', 'skills', 'jeremiah-brain-pack'),
  path.join(os.homedir(), '.openclaw', 'skills', 'jeremiah-brain-pack'),
];

const src = path.join(__dirname);

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'install.js' || entry.name === 'package.json') continue;
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

for (const target of targets) {
  try {
    copyDir(src, target);
    console.log(`✅ Brain Pack installed → ${target}`);
  } catch (e) {
    // Not all runtimes will have all paths — that's fine
  }
}

console.log('\n🧠 Jeremiah Krakowski Brain Pack ready.\nRestart your agent session to activate.\n');
