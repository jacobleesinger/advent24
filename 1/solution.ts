import { readFileSync } from "fs";
import path from 'path';

const inputPath = path.resolve(__dirname, 'input.txt');

const input = readFileSync(inputPath, "utf-8");

const lines = input.split('\n');

const pairs = lines.map(line => line.split(' ').map(Number).filter(Boolean)).filter(pair => pair.length === 2);

const left = pairs.map(pair => pair[0]).sort((a, b) => a - b);
const right = pairs.map(pair => pair[1]).sort((a, b) => a - b);

let totalDistance = 0;

for (let i = 0; i < left.length; i++) {
  totalDistance += Math.abs(left[i] - right[i]);
}

console.log('totalDistance', totalDistance);
