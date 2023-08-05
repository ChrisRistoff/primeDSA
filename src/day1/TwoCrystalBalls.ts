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
