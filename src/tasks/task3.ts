export const findNaughtyStep = (original: string, modified: string) => {
  // quick exit in case all ok
  if (original.length === modified.length) return '';
  const length = Math.max(modified.length, original.length);

  for (let index = 0; index < length; index++) {
    const isLetterDiffer = original[index] !== modified[index];
    if (isLetterDiffer) {
      // we can add a character
      if (original.length < modified.length) {
        return modified[index];
      }
      // or we can remove a character
      return original[index];
    }
  }
}