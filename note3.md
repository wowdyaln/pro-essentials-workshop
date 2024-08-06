# deriving-types-from-values
## 129-classes-cross-value-and-type-world
`class` cross over between the value world and the type world,
meaning that you can kind of use them in both. A really neat little feature



## 新觀念，`this` 可以當成 value 跟 type, 130-this-crosses-value-and-type-world
哇！去看影片。

## 新觀念，Using the Same Name for Values and Types in TypeScript
131-naming-values-and-types-the-same 在 TypeScript 中使用相同的名稱來表示值和類型。
- 通過創建一個名為 `Logger` 的常數對象並定義各種方法,可以創建一個通用的日誌功能。
- 通過使用 `typeof Logger` 來創建一個名為 `Logger` 的類型別名,可以同時使用這個名稱作為類型和值。
- 這種技巧對於那些既像類型又像值的東西很有用,例如 Zod 模式。
- 這種方法提供了靈活性,可以在您的應用程序中將對象用作值和類型,從而您可以編寫更加適應性和可重用的代碼

除了 Zod 模式，還有以下幾種情況可以使用相同名稱作為值和類型的技巧：

1. **API 客戶端**：當你定義一個 API 客戶端時，可以將請求和響應的結構定義為類型，並使用相同的名稱來表示具體的實現。

2. **配置對象 configuration object**：在應用中，你可以創建一個配置對象，並將其類型定義為相同的名稱，這樣在使用配置時就可以同時獲得類型提示。

3. **資料模型**：在處理資料庫模型時，可以使用相同的名稱來定義資料結構和實際的資料物件，這樣可以方便地進行資料驗證和操作。

4. **事件處理**：對於事件系統，可以定義事件的類型和實際的事件物件，讓你在處理事件時獲得類型安全。

5. **函數型程式設計**：在使用高階函數時，可以定義函數的類型和實際的函數實現，這樣可以提高程式碼的可讀性和可維護性。

這些情況都能夠利用相同名稱的特性，增強代碼的可讀性和靈活性。

# annotations-and-assertions
## 新觀念! 146-satisfies
重要觀念，要再複習

'satisfies' 操作符在以下情況下比變數註解更為適合：

1. **自動推斷與類型約束**：當你希望 TypeScript 自動推斷物件的類型，同時又想確保它符合某些特定條件時，使用 'satisfies' 可以達成這個目的，而不需要明確地指定類型。

## 新觀念! 147-satisfies-vs-as-vs-variable-annotations
重要觀念，要再複習

If you do have a choice, you should always do the **variable annotation** because `as` is unsafe It is going to lead you into like dark corners because you're telling TypeScript Forcing a value to be of a certain type Whereas this object is basically just saying okay
如果你有選擇的話，你應該總是進行變數註釋，因為as是不安全的，它會導致你陷入困境，因為你正在告訴TypeScript強制一個值為某種類型

`as` is used when you want to Basically tell TypeScript that you know more than it
當你想告訴TypeScript你知道更多時，就使用as 

`satisfies` is used when you want to basically make sure a value is checked without changing the inference on that value and then Yeah, a variable annotation is used all of the rest of the time
當你想確保值被檢查而不更改該值的推論時，則使用satisfies  其他時間則使用變數註釋


## 新觀念! 148-satisfies-with-as-const
重要觀念，要再複習


# modules-scripts-and-declaration-files

## module-or-script.explainer
### Scripts Have Global Scope
Anything defined in a script is available globally. This is reminiscent of traditional JavaScript where scripts are included in HTML and everything is globally accessible.

### Modules Have Local Scope
In TypeScript, a module is a file containing code that is executed within its own scope, not in the global scope. This means variables, functions, or types defined in a module are not accessible outside the module unless explicitly exported.
在 TypeScript 中，模組是一個文件，其中包含在其自己的範圍內執行的程式碼，而不是在全域範圍內執行。這意味著模組中定義的變數、函數或類型在模組外部不可訪問，除非明確導出。

**If a file contains either the `import` or `export` keywords,**

**TypeScript treats it as a module. Otherwise, it's considered a script.**


## 160-module-detection-force 
在 tsconfig.json 中：
`moduleDetection:` This option forces TypeScript to consider all files as modules. This helps to avoid 'cannot redeclare block-scoped variable' errors. 

[The TSConfig Cheat Sheet | Total TypeScript](https://www.totaltypescript.com/tsconfig-cheat-sheet)

**請一定要設置爲 force**

## TypeScript 的宣告檔(declaration files)
Declaration files are where you declare the types for TypeScript. They're marked by the `.d.ts` extension.
- 宣告檔(.d.ts)僅用於類型宣告,不能包含任何執行時期的程式碼。
- 在宣告檔中可以宣告和匯出類型,並在其他地方匯入使用。

## 新觀念 ambient-context-and-declare-const
166-ambient-context-and-declare-const
TypeScript 中使用 `declare` 關鍵字來定義全域變數。

### 重點整理
- `declare` 關鍵字允許您為全域變數指定類型。使用它時會創建一個 ambient 上下文,這意味著變數將被注入而無需提供實現。
- 使用 `declare const DEBUG: {}` 可以指定 `DEBUG` 是一個常數,不需要提供實現。
- 通過 `declare const DEBUG: { getState: () => { id: string; } }` 可以對 `DEBUG` 對象添加類型說明。
- `declare` 變數只在聲明它的模組中可用,不會污染全域命名空間。每個模組可以獨立定義自己的全域變數，而不必擔心影響到其他模組


## 167-declare-global
I would recommend if you're doing any global ambience kind of alterations, you put them in a `.d.ts` file.