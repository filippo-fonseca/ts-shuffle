/**
 * An *ncredibly meticulous and complex* function that shuffles the contents of an array
 * @param arr The array to be shuffled
 * @return The shuffled array
 */
 export const shuffle = (arr: any[]) => {
  var currentIndex = arr.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

