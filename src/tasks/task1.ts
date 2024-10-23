export const findFirstRepeated = (gifts: Array<number>) => {
    let firstRepeatedIndex = Infinity;
    let firstRepeatedId = -1;
    for (const [index, giftId] of gifts.entries()) {
      const repeatedIndex = gifts.indexOf(giftId, index + 1);
      if (repeatedIndex !== -1 && firstRepeatedIndex > repeatedIndex) {
        firstRepeatedIndex = repeatedIndex;
        firstRepeatedId = giftId;
      }
    }
    return firstRepeatedIndex !== Infinity ? firstRepeatedId : -1;
  }
  