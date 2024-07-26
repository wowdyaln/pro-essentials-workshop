import { it } from "vitest";

// 如果不用 Enum 可以這樣寫：
// const Method = {
//   GET: "GET",
//   POST: "POST",
//   PUT: "PUT",
//   DELETE: "DELETE",
// } as const;

// const request = (url: string, method: keyof typeof Method) => {
//   // ...
// };

// it("Should force you to use the enum values", () => {
//   request(
//     "https://example.com",
//     Method.PUT // 直接用
//   );

//   request(
//     "https://example.com",
//     "POST" // 也可以用 string
//   );

//   request("https://example.com", Method.GET);
//   request("https://example.com", Method.POST);
// });

// it("Should give you an error if you pass a different enum with the same value", () => {
//   enum Method2 {
//     GET = "GET",
//     POST = "POST",
//     PUT = "PUT",
//     DELETE = "DELETE",
//   }

//   request("https://example.com", Method2.GET);
// });

// 用 Enum：
enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
const request = (url: string, method: Method) => {
  // ...
};

it("Should force you to use the enum values", () => {
  request(
    "https://example.com",
    // @ts-expect-error
    "GET" // 用 string 會報錯
  );

  request(
    "https://example.com",
    // @ts-expect-error
    "POST" // 用 string 會報錯
  );

  request("https://example.com", Method.GET); // 只能透過 enum 來使用
  request("https://example.com", Method.POST); // 只能透過 enum 來使用
});

it("Should give you an error if you pass a different enum with the same value", () => {
  enum Method2 {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
  }

  request("https://example.com", Method2.GET); // 只能透過 『原本定義的』 enum 來使用
});
