export const decode = (message: string): string => {
  let finalMessage = '';
  let capturedMessage = '';
  let captureMode = 0;
  for (const letter of message) {
    if (letter === '(') {
      if (captureMode) capturedMessage += ')';
      captureMode++;
      continue;
    }
    if (letter === ')') {
      captureMode--;
      if (captureMode) capturedMessage += '(';
      else {
        finalMessage += capturedMessage.split('').reverse().join('');
        capturedMessage = '';
      }
      continue;
    }
    if (captureMode) {
      capturedMessage += letter;
      continue;
    }
    finalMessage += letter;
  }
  if (finalMessage.indexOf('(') !== -1) return decode(finalMessage);
  else return finalMessage;
}