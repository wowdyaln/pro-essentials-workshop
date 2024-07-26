import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[]
) => {
  if (searchParams.name) {
    return users.filter((user) => user.name.includes(searchParams.name!));
    /*

 I would say that really it's most useful when you think you know better than TypeScript
 in the kind of example that we initially gave.
 But if you're using this too often, it's very similar to `as`.
 So I would be very careful when you're using this kind of
 like every other line of code or something like that.
 Be very, very careful with this operator because it's very easy to introduce bugs into your system.

*/
  }

  return users;
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "2",
        name: "Alice",
      },
    ]
  );

  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);

  type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
});
