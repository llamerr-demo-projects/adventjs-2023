const replaceAt = function(s: string, index: number, char: string) {
    const a = s.split("");
    a[index] = char;
    return a.join("");
}

const OPEN_TIME = 5;

export const cyberReindeer = (road: string, time: number): Array<string> => {
    const result = [];
    for (let step = road.indexOf('S'); step < road.length;) {
      //replace original Santa position
      let currentRoad = road.replace('S', '.');
      //replace gates if they open
      if (result.length >= OPEN_TIME) {
        currentRoad = currentRoad.replaceAll('|', '*');
      }
      //add current Santa position
      currentRoad = replaceAt(currentRoad, step, 'S');
      
      result.push(currentRoad);
      if (result.length === time) break;
  
      if (currentRoad[step+1] === '|' && result.length < OPEN_TIME) {
        continue;
      }
      step++;
    }
    return result;
  }