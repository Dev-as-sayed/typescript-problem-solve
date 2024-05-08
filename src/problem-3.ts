{
  // problem - 3
  function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
  }

  const numbers: number[] = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
  console.log(numbers);
}
