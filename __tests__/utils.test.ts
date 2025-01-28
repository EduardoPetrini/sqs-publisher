import { describe, it } from "node:test";
import assert from "node:assert";
import { randomString } from "../lib/utils";

describe("randomString", () => {
  it("should return a random string of a given length", () => {
    const length = 10;
    const result = randomString(length);
    assert.strictEqual(result.length, length);
  });
});
