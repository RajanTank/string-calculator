export class StringCalculator {
  public Add(numbers: string): number {
    const num = parseInt(numbers);
    return isNaN(num) ? 0 : num;
  }
}

