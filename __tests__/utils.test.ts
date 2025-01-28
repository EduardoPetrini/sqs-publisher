import { describe, it } from "node:test";
import assert from "node:assert";
import { generateQueueName, randomString } from "../lib/utils";

describe("randomString", () => {
  it("should return a random string of a given length", () => {
    const length = 10;
    const result = randomString(length);
    assert.strictEqual(result.length, length);
  });
});

describe("generateQueueName", () => {
  it("should return a queue name with a given prefix", () => {
    const prefix = "test-queue";
    const result = generateQueueName(prefix);
    assert.strictEqual(result.startsWith(prefix), true);
  });
});

