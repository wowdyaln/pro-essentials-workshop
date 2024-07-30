import { Equal, Expect } from "@total-typescript/helpers";

// CODE

type PromiseFunc<T, U> = (input: T) => Promise<U>;

// TESTS

type Example1 = PromiseFunc<string, string>;

type test1 = Expect<Equal<Example1, (input: string) => Promise<string>>>;

type Example2 = PromiseFunc<boolean, number>;

type test2 = Expect<Equal<Example2, (input: boolean) => Promise<number>>>;
