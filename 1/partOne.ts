import { getLists } from './getLists';

const { left, right } = getLists('input.txt');

let totalDistance = 0;

for (let i = 0; i < left.length; i++) {
  totalDistance += Math.abs(left[i] - right[i]);
}

console.log('totalDistance', totalDistance);
