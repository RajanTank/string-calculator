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

  test("Handles unknown number of inputs", () => {
    expect(calc.Add("1,2,3,4")).toBe(10);
  });

  test("Supports new lines between numbers", () => {
    expect(calc.Add("1\n2,3")).toBe(6);
  });

  test("Supports custom single-char delimiter", () => {
    expect(calc.Add("//;\n1;2")).toBe(3);
  });

  test("Throws error on negative numbers", () => {
    expect(() => calc.Add("1,-2,-5")).toThrow("negatives not allowed: -2, -5");
  });

  test("Ignores numbers greater than 1000", () => {
    expect(calc.Add("2,1001")).toBe(2);
  });

  test("Supports custom delimiter of any length", () => {
    expect(calc.Add("//[***]\n1***2***3")).toBe(6);
  });

});
