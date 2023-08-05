export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
  if (breaks[i]) {
    break;
    }
  }

  const lastJumpPos = i - jumpAmount;

  for (let j = lastJumpPos; j <= i ; j++) {
    if (breaks[j]) {
      return j;
     }
   }

   return -1;
}



export function two_crystal_balls_binary_search(breaks: boolean[]): number {
  let left = 0;
  let right = breaks.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (breaks[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return breaks[left] ? left : -1;
}

