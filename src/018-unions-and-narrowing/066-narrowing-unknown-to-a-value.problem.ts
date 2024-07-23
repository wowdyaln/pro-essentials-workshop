import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const parseValue = (value: unknown) => {
  if (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  ) {
    return value.data.id;
  }

  /*
And this would be a lot simpler and just be a single line of code using Zod.
But knowing that you can do this, I think is a really nice exercise to understand
that TypeScript has your back when you're doing this kind of narrowing.
And unknown really is just like a massive union type of all of the possible things there are in TypeScript.
And so if you know how to narrow unknown,
then you're probably going to have a pretty easy job narrowing something that's a little bit clearer.

*/

  throw new Error("Parsing error!");
};

it("Should handle a { data: { id: string } }", () => {
  const result = parseValue({
    data: {
      id: "123",
    },
  });

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toBe("123");
});

it("Should error when anything else is passed in", () => {
  expect(() => parseValue("123")).toThrow("Parsing error!");
  expect(() => parseValue(123)).toThrow("Parsing error!");
});
