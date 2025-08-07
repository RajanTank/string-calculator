export class StringCalculator {
  public Add(numbers: string): number {
    if (!numbers) return 0;
    const delimiters = [",", "\n"];
    const regex = new RegExp(delimiters.join("|"));

    const numberArray = numbers.split(regex).map(n => parseInt(n));
    return numberArray.reduce((sum, number) => sum + number, 0);
  }
}

