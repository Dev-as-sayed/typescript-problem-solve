{
  // problem - 4
  function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
  }
  const stringsArray: string[] = reverseArray(["apple", "banana", "cherry"]);
  const numbersArray: number[] = reverseArray([10, 20, 30]);

  console.log(stringsArray);
  console.log(numbersArray);
}
