export const manufacture = (gifts: Array<string>, materials: string) => {
  return gifts.filter(gift => {
    for (const letter of gift) {
      if (materials.indexOf(letter) === -1) return false;
    }
    return true;
  })
}