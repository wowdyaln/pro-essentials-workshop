import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[]
) => {
  const searchParamsName = searchParams.name;

  /*

As JavaScript developers, we know that .filter is called synchronously.
However, TypeScript doesn't have that knowledge. It can't be sure that searchParams.name won't be mutated or
changed between the if statement and the .filter call.

身為 JavaScript 開發人員，我們知道 .filter 是同步呼叫的。然而，TypeScript 不具備這些知識。
無法確定 searchParams.name 在 if 語句和 .filter 呼叫之間不會發生突變或變更。

You might wonder why TypeScript treats object properties differently than variables when it comes to narrowing across scopes.
您可能想知道為什麼 TypeScript 在縮小範圍時對待物件屬性的方式與對待變數的方式不同。

The reason is that object properties can have additional complexities, such as getters, which variables can't. As a result,
TypeScript tends to be more cautious when narrowing types based on object properties compared to variables.
原因是物件屬性可能具有額外的複雜性，例如 getter，而變數卻不能。因此，與變數相比，TypeScript 在根據物件屬性縮小類型範圍時往往更加謹慎。

*/

  if (searchParamsName) {
    return users.filter((user) => {
      return user.name.includes(searchParamsName);
    });
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
