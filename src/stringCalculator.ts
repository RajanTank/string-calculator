export class StringCalculator {
  public Add(numbers: string): number {
    if (!numbers) return 0;

    const { delimiters, sanitizedNumbers } = this.getDelimiters(numbers);

    const numberArray = this.parsedNumbers(sanitizedNumbers, delimiters);

    this.checkForNegative(numberArray);

    return numberArray.filter(num => num <= 1000).reduce((sum, number) => sum + number, 0);
  }

  checkForNegative(numbers: number[]) {
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
  }
  parsedNumbers(numbers: string, delimiters: string[]): number[] {
    const regex = new RegExp(delimiters.join("|"));
    return numbers.split(regex).map(n => parseInt(n));
  }
  getDelimiters(numbers: string): { delimiters: string[]; sanitizedNumbers: string } {
    const delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
      delimiters.push(numbers[2]);
      const sanitizedNumbers = numbers.slice(numbers.indexOf("\n") + 1); // To ge the numbers after the delimiter e.g //;\n1;2 will be 1;2
      return {
        delimiters,
        sanitizedNumbers
      }
    }
    return {
      delimiters,
      sanitizedNumbers: numbers
    };
  }
}

