{
  // problem - 2
  function findLargestNumber(numbers: number[]): any {
    if (numbers.length <= 0) {
      throw new Error("Array is empty");
    }
    let largestNumber: number = 0;
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
    return largestNumber;
  }
  const result: number[] = findLargestNumber([10, 5, 8, 20, 3]);
  console.log(result);
}
