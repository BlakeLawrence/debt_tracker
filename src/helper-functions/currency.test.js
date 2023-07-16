import { describe, expect, test } from "@jest/globals";
import { currency } from "./currency.js";

describe("Currency function", () => {
  test("passing 1 should return £1.00", () => {
    expect(currency(1)).toBe("£1.00");
  });
  test("passing 10 should return £10.00", () => {
    expect(currency(10)).toBe("£10.00");
  });
  test("passing 100 should return £10.00", () => {
    expect(currency(100)).toBe("£100.00");
  });
  test("passing 10000 should return £10.00", () => {
    expect(currency(1000)).toBe("£1,000.00");
  });
  test("passing 10000 should return £10,000.00", () => {
    expect(currency(10000)).toBe("£10,000.00");
  });
});
