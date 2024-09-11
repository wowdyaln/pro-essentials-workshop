# the-weird-parts

## 154.6-iterating-over-objects

```ts

interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  for (const key in user) {
    // console.log(user[key]);  //* 不能這樣寫
    console.log(user[key as keyof User]); //* 要更嚴格的檢查
  }
}

```

```ts
// 方法2
interface User {
  id: number;
  name: string;
}

function printUser(user: Record<string, any>) {
  for (const key in user) {
    console.log(user[key]);
  }
}

```


## 新觀念！！ 157-unions-of-functions 

- 當多個函數的參數類型不兼容時，可能會產生 `never` 類型，因為無法同時滿足不同的類型要求。
- 例如，若定義一個 `Input` 類型為 `string & number & boolean`，則會解析為 `never` 類型。
- 雖然在運行時代碼可以正常工作，但在類型層面上需要使用類型斷言來解決這個問題。
- 使用 `as never` 可以解決此類問題，但不能使用 `as any`，因為 `any` 不能賦值給 `never`。
- 另一種解決方案是使用類型保護，根據輸入類型調用對應的函數，但這樣的代碼會更加冗長。
當處理不兼容的函數類型時，使用 `as never` 是一個有效的解決方案。

This is something that actually comes up quite a lot.
And I've seen this occur in the wild a fair bit.
So `as never` has a kind of like a union of functions handling that makes the most sense.



## union of functions 新觀念, 多思考！ 158-unions-of-function-return-types
when you have a union of functions,
the parameters get intersected and the return types get unioned.

Union of Functions 心智模型：**參數 type intersected， 回傳 type unioned.**


## 新觀念! 158.5-annotating-errors-a-function-throws
TypeScript 不支援用 `throws` 語法來描述函數可能拋出的錯誤，也無法直接註解 catch 區塊中的錯誤類型。雖然可以使用 `instanceof` 來檢查錯誤類型，但這需要函數使用者自行處理錯誤。
1. **無法使用 `throws` 語法**：TypeScript 無法直接指定函數可能拋出的錯誤。
2. **catch 區塊的限制**：無法對 catch 區塊中的錯誤變數進行類型註解。
3. **使用 `instanceof`**：這種方法可以檢查錯誤類型，但錯誤處理的負擔在於使用者。
4. **Result 型別**：透過 Result 型別（區別聯合類型），可以在函數內部捕捉錯誤資訊，提供更好的使用體驗。
### 結論
使用 Result 型別來處理錯誤是一種有效的方法，能夠在函數內部管理錯誤，減少拋出錯誤的可能性，並讓使用者能夠以可理解的方式處理錯誤。

