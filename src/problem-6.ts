{
  // problem - 6
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  function isRecentBook(book: Book): boolean {
    const currentYear: number = new Date().getFullYear();
    return currentYear - book.publishedYear <= 5;
  }
  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };
  const result: boolean = isRecentBook(book1);
  console.log(result);
}
