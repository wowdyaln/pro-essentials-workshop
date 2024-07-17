import { Equal, Expect } from "@total-typescript/helpers";

//* 這個方法比較好！！
const fetchData = async () => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")] as const;
  }
  // Like this is a really cool technique for when you're working, let's say, in React and you
  // want to return a custom hook with like two tuple members or something like that.
  const data = await result.json();

  return [undefined, data] as const;
};

const example = async () => {
  const [error, data] = await fetchData();

  type Tests = [
    Expect<Equal<typeof error, Error | undefined>>,
    Expect<Equal<typeof data, any>>
  ];
};
