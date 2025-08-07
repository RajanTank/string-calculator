import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculator", () => {
  const calc = new StringCalculator();

  test("Returns 0 for empty string", () => {
    expect(calc.Add("")).toBe(0);
  });

  test("Returns number for single number input", () => {
    expect(calc.Add("1")).toBe(1);
  });

  test("Returns sum for two numbers", () => {
    expect(calc.Add("1,2")).toBe(3);
  });

});
