export const maxDistance = (movements: string): number => {
  let left = 0, right = 0, both = 0;
  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case "<":
        left++;
        break;
      case ">":
        right++;
        break;
      default:
        both++;
    }
  }
  return Math.abs(left-right) + both;
}