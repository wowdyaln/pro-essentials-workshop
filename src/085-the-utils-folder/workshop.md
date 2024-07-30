# Fast Track

## Section 1

### 215 - Generic Functions without Inference

Our `createStringMap` function creates a map with a certain type as its values.

See if you can add a type parameter to the `createStringMap` function so that the `Map` it creates will be the type of the type argument passed in.

https://www.typescriptlang.org/docs/handbook/2/generics.html

### 216 - Type Parameter Defaults in Generic Functions

Let's say that if we _don't_ provide a type argument to `createStringMap`, we want the `Map` to be typed with `string` as its values.

See if you can add a default type argument to `createStringMap` to make this happen.

https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-parameter-defaults

### 217 - Generic Functions with Inference

Our `uniqueArray` function turns an array into a set, and then back into an array.

But because it's typed as `any[]`, anything returned from the function is also typed as `any[]`.

See if you can add a type parameter to `uniqueArray` to make the errors go away.

Notice how you _don't need to add a type argument_ to `uniqueArray([1, 2, 3])` get the inference working!

https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics

## Section 2

### 218 - Type Parameter Constraints in Generic Functions

In our `addCodeToError` function, we want to make sure that any error passed in has an optional `code` property.

We also want to ensure that all errors passed have a `message` property.

See if you can add a constraint to the `TError` type parameter to make the errors go away.

https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints

### 219 - Generic Types and Generic Functions, 難懂，多看幾次

Our `safeFunction` function takes in an `async` function, and returns a `try/catch`'ed version of that function.

But currently, it's not inferring the `result` - it's always typed as `any`.

See if you can use what you know about generic types and generic functions to fix the typing of `safeFunction`.

- 使用泛型類型參數可以讓函數適應不同的返回值類型。
- 將泛型類型與泛型函數結合可以實現更複雜的模式,並將複雜性封裝在可重用的泛型類型中。
- safeFunction 示例展示了如何利用泛型類型推斷來增強代碼的型安全性。

### 220 - Multiple Type Arguments in Generic Functions, 難懂，多看幾次

Now we've got the result of our `safeFunction` typed, we also need to make sure the `args` passed to it are typed.

Notice how we've added `...args` to the `safeFunction` function.

See if you can add a second type parameter to `safeFunction` and `PromiseFunc` to make the errors go away. You'll also need to use a constraint.

- 藉由使用 `TArgs extends any[]` 來捕捉整個參數陣列,而不是使用 TArgs[]。這樣可以確保正確的類型推論。
- 確保返回的函數具有與原始函數相同的參數類型。
- 不應使用 (...args: TArgs[]) 而應使用 (...args: TArgs) 的形式,因為後者可以正確捕捉參數元組。


### 221-type-predicates, 不好懂，多看幾次。更深入地解釋 type predicates
在 TypeScript 中的應用，包括更多的使用場景和進階技巧。 (from claude3.5)

1. 基本用法

首先，讓我們回顧一下基本用法：

```typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}
```

這個函數告訴 TypeScript，如果 `isString` 返回 true，那麼 `value` 就是 string 類型。

2. 聯合類型的縮小

type predicates 常用於縮小聯合類型：

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

let pet: Fish | Bird = getAnimal();

if (isFish(pet)) {
    pet.swim(); // TypeScript 知道這裡 pet 是 Fish
} else {
    pet.fly(); // TypeScript 知道這裡 pet 是 Bird
}
```

3. 自定義類型守衛

你可以創建更複雜的類型守衛：

```typescript
interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle";
}

function getArea(shape: Shape) {
    if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
}
```

4. 泛型中的應用

type predicates 也可以與泛型結合使用：

```typescript
function isArrayOfStrings<T>(value: T): value is T & string[] {
    return Array.isArray(value) && value.every(item => typeof item === "string");
}

function processStrings<T>(value: T) {
    if (isArrayOfStrings(value)) {
        value.forEach(str => console.log(str.toUpperCase()));
    }
}
```

5. 在類中的應用 （很難懂先跳過XD）

你可以在類方法中使用 type predicates：

```typescript
class ApiResponse<T> {
    constructor(private data: T | null) {}

    isSuccess(): this is ApiResponse<T> & { data: T } {
        return this.data !== null;
    }

    getData(): T {
        if (this.isSuccess()) {
            return this.data; // TypeScript 知道 this.data 不是 null
        }
        throw new Error("Data is null");
    }
}
```

6. 與 assertion functions 結合

TypeScript 4.3 引入了 assertion functions，可以與 type predicates 結合使用：

```typescript
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("Not a string!");
    }
}

function processValue(value: unknown) {
    assertIsString(value);
    console.log(value.toUpperCase()); // 沒有類型錯誤
}
```

這些例子展示了 type predicates 在 TypeScript 中的多種應用。它們不僅可以提高代碼的類型安全性，還能增強代碼的可讀性和可維護性。在處理複雜的類型關係時，type predicates 是一個強大的工具。


### 222-assertion-functions

- **斷言函數的定義**：斷言函數允許開發者在函數調用時斷言某個條件，這樣可以在不需要額外的條件檢查的情況下簡化代碼。
- **使用`asserts`關鍵字**：通過在函數返回類型中添加`asserts`關鍵字，可以明確告訴TypeScript該函數會斷言某個類型。例如，`function assertIsAdminUser(user: User): asserts user is AdminUser`。
- **類型安全性問題**：雖然斷言函數提供了便利，但開發者需要確保所斷言的內容與函數的返回類型一致，否則可能會導致類型安全性問題。
斷言函數是TypeScript中的一個強大工具，能夠提高代碼的可讀性和可維護性，但開發者必須謹慎使用，以確保類型的一致性。


