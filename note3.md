# deriving-types-from-values
## 129-classes-cross-value-and-type-world
`class` cross over between the value world and the type world,
meaning that you can kind of use them in both. A really neat little feature



## 新觀念，`this` 可以當成 value 跟 type, 130-this-crosses-value-and-type-world
哇！去看影片。

## 新觀念，Using the Same Name for Values and Types in TypeScript
131-naming-values-and-types-the-same

# annotations-and-assertions
## 新觀念! 146-satisfies
重要觀念，要再複習

## 新觀念! 147-satisfies-vs-as-vs-variable-annotations
重要觀念，要再複習

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

## declaration files
Declaration files are where you declare the types for TypeScript. They're marked by the `.d.ts` extension.


## 新觀念 ambient-context-and-declare-const
還不是很清楚 declare  用來幹嘛的


## 167-declare-global
I would recommend if you're doing any global ambience kind of alterations, you put them in a `.d.ts` file.