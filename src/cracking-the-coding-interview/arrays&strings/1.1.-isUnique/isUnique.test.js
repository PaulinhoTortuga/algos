import { test, expect } from "vitest";
import isUnique from "./isUniue";

test("all charachters should be unique", () => {
  expect(isUnique("test")).toBe(false);
  expect(isUnique("tesr")).toBe(true);
  expect(isUnique("eeee")).toBe(false);
  expect(isUnique("re")).toBe(true);
});
