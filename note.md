# essential-types-and-annotations
## 031-tuples
除了
`const setRange = (range: [number, number]) => { ... } `

也可以這樣定義
`const setRange = (range: [x: number, y: number]) => { ... } `


# IDE superpowers
## 044-manually-triggering-autocomplete.problem
使用 Option ⌥ + Esc (Mac) 就可以開啓 autocomplete。

## 049-organize-imports
有用不到的 import 變數，開啓 vscode command input, 輸入 `Organize Imports`，就可以把 import 變數整理好。


## 050-refactor 非常實用的工具，去看影片。
2個開啓 refactor 彈窗的方式：
- 開啓 vscode command input, 輸入 `refactor`
- 在遊標處按下右鍵，選擇 `refactor`



# unions-and-narrowing
## 再複習一次 057-literals-vs-wider-types
[Resolving Literal Types to Wider Types | Total TypeScript](https://www.totaltypescript.com/workshops/typescript-pro-essentials/unions-and-narrowing/resolving-literal-types-to-wider-types)


## 再複習一次 061-map-has-doesnt-narrow-map-get



## 再複習一次 062-throwing-errors-to-narrow
Throwing errors like this can help you identify issues at runtime. In this specific case, it acts like a type annotation that narrows down the code inside of the immediate if statement scope.
拋出這樣的錯誤可以幫助您在運行時識別問題。在這種特定情況下，它的作用類似於類型註釋，可以縮小直接 if 語句範圍內的代碼範圍。

In general, this technique is useful any time you need to manage logical flow in your applications.
一般來說，當您需要管理應用程式中的邏輯流時，此技術非常有用。


## 這個檢查語法太重要、太實用了！！！ 064-narrowing-with-in-statements

工作上太常碰到這樣的問題了！當時還不知道有這樣好用的語法。
So this is a really really useful piece of syntax for narrowing down objects that might have different keys from each other
這是一個非常有用的語法，用於縮小可能彼此具有不同鍵的物件的範圍


## unknown, 再複習一次 065-introduction-to-unknown

Unknown sits at the very top of the type hierarchy in TypeScript. It is the top type.
`Unknown` 位於 TypeScript 類型層次結構的最頂層。(所有的類型都可以 assign 給 unknown)

## 新觀念, 065.5-narrowing-with-instanceof-statements

## never, 再複習一次 067-introduction-to-never
`never` 位於 TypeScript 類型層次結構的最底層。( never 可以 assign 給其他所有類型)，去看影片的圖示。

## 不學就不知道的地方：再複習一次 071-narrowing-in-different-scopes

## 075-destructuring-a-discriminated-union
結論： discriminated-union 就不要使用 destructure 語法了！多打一點字就好了！

## The switch (true) Pattern in TypeScript (only been possible since TypeScript 5.3)
This is actually only been possible since TypeScript 5.3. And you might be reading this or watching this in the future. Currently, this is on the beta version of TypeScript, which is coming out. So you can see how TypeScript kind of evolves through time and adds these kind of new changes, which is super duper cool.

## 080-adding-defaults-to-discriminated-union
不直覺，需要多想

## 080.5-should-you-provide-function-return-types
- 提供函式回傳型別可以幫助確保函式行為符合預期，特別是在處理多分支情況時。
- 在簡單函式中，通常不需要使用回傳型別，因為這可能會導致不準確的型別
