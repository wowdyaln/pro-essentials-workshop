# objects

## 適合 interface 的情境，083-compare-between-intersections-and-interfaces.explainer

使用（interface extends）和（type intersection）來組合不同類型的優缺點。

- 使用 interface 時，TypeScript 會檢查所有屬性並給出不兼容屬性的驗證。這使得錯誤在定義類型時就會顯示出來。
- 當使用 intersection時，TypeScript 不會給出任何有關類型如何組合的保證。錯誤只有在使用類型時才會顯示出來，這使得追蹤錯誤來源更加困難。interface 可以提供更清晰的錯誤提示，特別是在處理大型繼承結構時


### 關鍵點
- type 可以表示任何東西，包括物件，而 interface 主要表示物件類型。
- TypeScript 更推薦使用 interface extends 而非 intersections，因為前者可以被快取，提高效能。
- 使用 interface extends 可以使 TypeScript 在進行類型檢查和 IDE 更新時運行更快


## 085-index-signatures-with-defined-keys 常用模式

## 086-property-key-type
`type PropertyKey = string | number | symbol`

## 再複習一次，087-record-type-with-union-as-keys


## 新觀念，088-declaration-merging-of-interfaces
- TypeScript 允許在同一範圍內宣告多個相同名稱的 interface，並將其合併成單一定義。
- 使用 type 而非 interface 可以避免重複宣告的問題。
- interface宣告合併在不同文件中不會互相干擾，但在同一文件中可能導致意外行為

## 新觀念，093-omit-cant-distribute
Omit 在處理 union type 時，不會逐一遍歷每個成員，而是將 union type 合併成一個結構再進行操作。這導致 Omit 無法如預期地從 union type 中移除特定屬性，僅保留共同屬性。

以下2個 helper type 可以確保在使用Omit和Pick時,能夠按預期操作聯合類型的每個成員,從而獲得更可預測的結果

## DistributiveOmit
Matt 寫了一個可以從 union type 中移除特定屬性的定義：

```ts
type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

```

## DistributivePick
Sep 11, 2024 (from email)
可以將Pick操作分配到聯合類型的每個成員,從而更準確地選擇屬性

```ts
type DistributivePick<T, K extends keyof T> = T extends any ? Pick<T, K> : never;
```



# classes
## 要使用到 `class extends` 的時候再參考：114-extending-other-classes

## 114.5-override
在 tsconfig.json 中加入如下設定,要覆蓋 extends 的 class 的 method，就要加入 `override`
`"noImplicitOverride": true,`

## 115-implementing-interfaces-or-types
新的語法 `implements` 
`class Shape implements IShape {}`  
用來擴充類別的擴展

影片的示範，更能感受到 **"classes are just like objects"**
(108 - Understanding Classes Matt 提到的)

`type IShape = {...}` 規範了物件該長什麼樣子
`class Shape` 根據 IShape 的規範，實作細節。
就醬子而已。


## 再複習一次，116-this-in-functions-and-objects

# typescript-only-features

## enum 看看就好
about enums, I think.
Maybe don't use them.

But if you do have to use them,
then don't use `const enums`, certainly.


## namespace 看看就好
I really can't see much functionality for them, to be honest. Namespaces, I think, are kind of like a dead feature in TypeScript. You will encounter them because they're used to organize types that are in the global scope, for instance, like the Node.js types contain a lot of namespaces.

**But in your application code, I would not advise using namespaces.**
