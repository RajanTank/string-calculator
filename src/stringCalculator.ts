export class StringCalculator {
  public Add(numbers: string): number {
    if (!numbers) return 0;
    const delimiters = [",", "\n"];

    if (numbers.startsWith("//")) {
      delimiters.push(numbers[2]);
      numbers = numbers.slice(numbers.indexOf("\n") + 1);
    }
    const regex = new RegExp(delimiters.join("|"));
    const numberArray = numbers.split(regex).map(n => parseInt(n));

    this.checkForNegative(numberArray);

    return numberArray.filter(num => num <= 1000).reduce((sum, number) => sum + number, 0);
  }

  checkForNegative(numbers: number[]) {
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
  }
}

