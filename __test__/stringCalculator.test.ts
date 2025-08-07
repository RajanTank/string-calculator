import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculator", () => {
  const calc = new StringCalculator();

  test("Returns 0 for empty string", () => {
    expect(calc.Add("")).toBe(0);
  });

});
