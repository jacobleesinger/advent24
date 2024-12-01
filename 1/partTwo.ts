import { getLists } from './getLists';

const { left, right } = getLists('input.txt');

/**
 * Count the number of times a number appears in an array
 */
const countAppearances = (arr: number[], num: number) => {
  let count = 0;

  arr.forEach(value => {
    if (value === num) {
      count++;
    }
  });

  return count;
}


let similarityScore = 0;

left.forEach((num) => {
  // Count the number of times the number appears in the right array
  const numAppearances = countAppearances(right, num);

  // add the number times the number of appearances to the similarity score
  similarityScore += num * numAppearances;
});

console.log('similarityScore', similarityScore);
