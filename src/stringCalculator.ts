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
    return numberArray.reduce((sum, number) => sum + number, 0);
  }
}

