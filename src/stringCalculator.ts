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
    const regex = new RegExp(delimiters.map(m => this.escapeRegex(m)).join("|"));
    return numbers.split(regex).map(n => parseInt(n));
  }
  getDelimiters(numbers: string): { delimiters: string[]; sanitizedNumbers: string } {
    const defaultDelimiters = [",", "\n"];

    if (!numbers.startsWith("//")) {
      return {
        delimiters: defaultDelimiters,
        sanitizedNumbers: numbers
      };
    }

    const delimiterSectionEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterSectionEnd);  // To retrieve delimiter portion only eg. [***]
    const sanitizedNumbers = numbers.slice(delimiterSectionEnd + 1);  // To ge the numbers after the delimiter e.g //;\n1;2 will be 1;2
    let customDelimiters: string[];

    if (delimiterSection.startsWith("[")) {
      const delimiterMatches = [...delimiterSection.matchAll(/\[([^\]]+)\]/g)]; // To get the match delimiters eg. [***]
      customDelimiters = delimiterMatches.map(m => m[1]);
    } else {
      customDelimiters = [delimiterSection];
    }
    return {
      delimiters: [...defaultDelimiters, ...customDelimiters],
      sanitizedNumbers
    };
  }
  // https://stackoverflow.com/a/6969486
  // To escape regex special characters
  escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

