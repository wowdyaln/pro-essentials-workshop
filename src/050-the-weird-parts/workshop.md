# Fast Track

## Section 1

### 150 - Empty Object Type, 常用！

See if you can find a type annotation for `input` that accepts any type except `null` or `undefined`.

- [The Empty Object Type in TypeScript | Total TypeScript](https://www.totaltypescript.com/the-empty-object-type-in-typescript)

- 解說：[The Empty Object Type | Total TypeScript](https://www.totaltypescript.com/workshops/typescript-pro-essentials/the-weird-parts-of-typescript/accept-anything-except-null-or-undefined/solution)

使用空物件型別（`{}`）在以下情況下可能會比較有用：
1. **函式參數**：使用 `{}` 可以避免傳入原始類型（如 `string`、`number` 等）。（不過只是傳入空物件能幹嘛？也不能幹嘛）

2. **泛型約束**：這個才實用！！確保傳入的參數不是 `null` 或 `undefined` 

   ```typescript
   const myGenericFunc = <T extends {}>(t: T) => { return t; };
   ```

### 表示一個真正的空物件
應該使用 `Record<PropertyKey, never>`


### 152 - Excess Properties Warnings 這個行爲真的很奇怪！！！

Inside our `options` object, we're specifying a `search` property. We then pass it to `myFetch`, which doesn't accept a `search` property (on the `FetchOptions` interface).

Why isn't TypeScript erroring here? How can we get it to error by adding some annotations/changing the code?


- TypeScript 的類型模型是基於結構的。即使物件存在額外的屬性,只要滿足所需要的屬性,TypeScript 也不會提出警告。
- 要觸發超出屬性檢查,可以透過以下方式:1. 為變數添加類型註解、2. 使用 `satisfies` 關鍵字、3. 將變數直接內嵌到函數呼叫中。
- TypeScript 預設不檢查超出屬性,因為這樣的做法更加實用。如果強制檢查,在某些情況下需要手動移除多餘的屬性,可能會造成困擾。

### 153 - Excess Property Warnings In Functions

We're mapping over some users in `users.map`. The variable that the mapping gets assigned to, `usersWithIds`, is only expecting `id` and `name` properties on each user.

But inside the map, we're able to pass an extra `age` property without TypeScript erroring. How?

See if you can fix this by adding some annotations/changing the code.

1. **TypeScript 的寬鬆性**：TypeScript 不會自動檢查物件中的額外或意外屬性，這在運行時通常不會造成問題，但在某些情況下可能會導致錯誤。

2. **`Object.keys` 的限制**：`Object.keys` 返回的是一個 `string[]`，並不能保證包含所有預期的屬性，這使得開發者無法確定返回的鍵是否正確。

3. **`Object.entries` 的行為**：`Object.entries` 返回一個鍵為 `string`、值為 `any` 的陣列，這也可能讓開發者感到困惑。

4. **物件類型的處理**：TypeScript 在處理物件類型時相對保守，這是為了避免不必要的錯誤，但也導致了對於物件屬性檢查的限制。

這些特性使得 TypeScript 在某些情況下顯得不夠精確，開發者需要更加注意物件的結構與類型。


## Section 2

### 154 - Object.keys and Object.entries

Now, we're taking our users from `usersWithIds` and mapping over them again. This time, for each user we're calling `Object.keys` on each user.

We know that the keys are `id` and `name`, but TypeScript thinks that the result of `Object.keys` is `string[]`. Why not `Array<"id" | "name">`?

### 154.6 - Iterating Over Objects

Inside our `printUser` function, see if you can iterate over all of the keys in the `user` object and log their corresponding values to the console.

Some ground rules - you can't use `Object.values`, or `Object.entries`. Try using a `for` loop, or `Object.keys`.

You might need to change some of the types, or use a type assertion. `keyof` may also come in handy.

## Section 3

### 155 - Comparing Function Parameters

Our `listenToEvent` function takes in a `callback`, which is typed as `CallbackType`.

It seems that the function passed to `listenToEvent` is able to take in no parameters, one parameter (`event`), or up to four parameters (`event`, `x`, `y` and `screenId`).

See if you can figure out the correct way to type `CallbackType` to make the TypeScript errors go away.

### 156 - Unions of Functions With Object Parameters

In our `loggers` array, we have two functions. One takes in an object with an `id` property, and the other takes in an object with a `name` property.

Figure out the correct type for the `obj` parameter in `logAll`.

### 157 - Unions of Functions With Incompatible Parameters

We now have an object of functions - each which handle different primitive types.

In our `format` function, we get the `typeof` `input`, which can either be `string | number | boolean` (we use `as` to narrow it down to those types).

We then grab our `formatter` from the object of functions.

But TypeScript is erroring on the `formatter(input)` line. Why? See if you can add an annotation which fixes this.
