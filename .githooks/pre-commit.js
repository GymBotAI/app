#!/usr/bin/env node
import { execSync } from "node:child_process";

execSync("./node_modules/.bin/prettier --write .");
