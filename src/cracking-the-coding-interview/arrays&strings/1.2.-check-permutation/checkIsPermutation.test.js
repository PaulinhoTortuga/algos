import { test, expect } from "vitest";
import checkIsPermutation from "./checkIsPermutation";

test("one string should be permutation of another", () => {
  expect(checkIsPermutation("test", "stet")).toBe(true);
  expect(checkIsPermutation("tt", "ee")).toBe(false);
  expect(checkIsPermutation("nottest", "test")).toBe(false);
  expect(checkIsPermutation("e", "e")).toBe(true);
  expect(checkIsPermutation("lana", "anal")).toBe(true);
});
