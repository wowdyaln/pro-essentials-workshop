# Using TypeScript As A Linter

## Learning Goals

- Understand how TypeScript is used in most modern frontend apps

## Problem

You'll notice that our `dist` folder has disappeared. When you run this exercise, we're not appearing to generate any JavaScript code.

Try cd-ing to the directory and running `tsc`. You'll notice that no JavaScript code is being emitted. Why is that?

- Take a look at the `tsconfig.json`
- Take a look at the options there. See if you can find one that decides whether TypeScript emits JavaScript code or not.


## 重點
And so these actual errors here, they don't, Vite doesn't know about these. It just uses something called ES build, which is an alternative to the TypeScript CLI to take this TypeScript code and turn it into JavaScript code without type checking.
Vite 它只是使用一種稱為 ES build 的東西，這是 TypeScript CLI 的替代方案，可以將 TypeScript 程式碼轉換為 JavaScript 程式碼，而無需進行類型檢查。

This means that it's faster at doing that job than the TypeScript CLI because the TypeScript CLI has to type check your code and then transform it into JavaScript. Whereas the Vite CLI just transforms into JavaScript, which is a lot easier. So why do we need TypeScript CLI

這意味著它比 TypeScript CLI 更快地完成這項工作，因為 TypeScript CLI 必須對程式碼進行類型檢查，然後將其轉換為 JavaScript。而Vite CLI只是轉換成JavaScript，這就簡單很多。那為什麼我們需要 TypeScript CLI

then you're probably going to be using TypeScript more as a linter, and you're going to have inside your TS config, no emit set to true. Now, this means that TypeScript still has an important place in the build process. It says whether you're over your entire repo, whether everything is type safe

那麼你可能會更多地使用 TypeScript 作為 linter，並且你將在你的 TS 配置中將 no emit 設為 true。現在，這意味著 TypeScript 在建置過程中仍然佔有重要地位。它表明您是否已經完成了整個儲存庫，所有內容是否都是類型安全的
