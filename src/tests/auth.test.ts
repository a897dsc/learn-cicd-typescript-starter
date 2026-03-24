import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should return null if no authorization header", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("should return the token if authorization header starts with ApiKey", () => {
    const headers = { authorization: "ApiKey my-secret-token" };
    expect(getAPIKey(headers)).toBe("my-secret-token");
  });

  test("should return null if authorization header doesn't start with ApiKey", () => {
    const headers = { authorization: "Bearer something" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("should return null if authorization header is malformed", () => {
    const headers = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });
});
