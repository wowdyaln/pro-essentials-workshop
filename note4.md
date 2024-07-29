# types you don't control

## 172-lib-d-ts
you can target different versions of JavaScript by specifying `lib` and `target` in your TS config


## 174-lib-dom-iterable
誰知道要加這個阿？

```
"lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ]
```



## 非常重要！！ 176.5-skip-lib-check-true
啟用 `skipLibCheck` 可以顯著加速編譯過程，因為它會跳過對宣告文件（.d.ts 文件）的類型檢查，這通常是多餘且耗時的。
`skipLibCheck` 為 true 時，TypeScript 專注於檢查用戶的程式碼，而忽略無法輕易更改的外部庫中的潛在錯誤。
啟用 skipLibCheck 是目前最好的選擇。 

`"skipLibCheck": true` 這樣設置就對了。


## 176.7-should-you-use-declaration-files-to-store-your-types
- `.d.ts` 檔案應該用於全域修改 TypeScript 的範圍或描述 JavaScript。
- 大多數專案的 tsconfig.json 檔案中設有 skipLibCheck 為 true，將類型定義放在 `.d.ts` 檔案中會導致 TypeScript 不檢查這些類型。
- 將 `.d.ts` 檔案轉換為 `.ts` 檔案很簡單，語法不變。
- 應將模組的類型定義保存在 `.ts` 檔案中，而不是 `.d.ts` 檔案。
- TypeScript 團隊也不建議將類型定義放在 `.d.ts` 檔案中。
- 如果發現專案中有 `.d.ts` 檔案，應立即將其轉換為 `.ts` 檔案，除非它們包含全域內容。