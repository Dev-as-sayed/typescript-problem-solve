{
  // Problem 1:
  function repeatString(inputString: string, times: number): any {
    let repeatedString = "";
    for (let i = 0; i < times; i++) {
      repeatedString += inputString;
    }
    console.log(repeatedString);
  }
  const result: string = repeatString("Hello!", 3);
}
