{
  // problem - 7

  function logString(param: unknown): any {
    if (typeof param === "string") {
      console.log(param);
    } else {
      console.error("Input is not a string.");
    }
  }
  const stringInput: string = logString("Hello, TypeScript!");
  const numberInput: number = logString(42);
}
