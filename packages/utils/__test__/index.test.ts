import { describe, expect, it } from "vitest";
import { isObject } from "../src";

describe("测试入口工具函数", () => {
  it("测试isObject函数", () => {
    expect(isObject(123)).toBe(false);
  });
});
