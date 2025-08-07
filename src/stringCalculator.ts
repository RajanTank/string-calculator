export class StringCalculator {
  public Add(numbers: string): number {
    if (!numbers) return 0;
    const numberArray = numbers.split(",").map(n => parseInt(n));
    return numberArray.reduce((sum, number) => sum + number, 0);
  }
}

