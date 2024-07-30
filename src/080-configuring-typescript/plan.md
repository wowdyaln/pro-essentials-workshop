# 筆記
## 178-my-recommended-tsconfig-base.explainer
涵蓋了基本選項、嚴格性設置、轉譯選項以及針對不同應用場景的配置建議。

- tsconfig.json文件是配置TypeScript的核心，包含多種編譯器選項。
- 基本選項包括skipLibCheck、target、esModuleInterop等，這些選項幾乎適用於所有TypeScript項目。
- 嚴格性設置建議包括strict、noUncheckedIndexedAccess、noImplicitOverride等。
- 如果使用tsc進行轉譯，應選擇module、outDir、sourceMap等設置。
- 如果不使用TypeScript進行轉譯，可以關閉轉譯設置，並使用module preserve和noEmit設置。
- 根據代碼運行環境選擇是否包含DOM類型。

## 179-no-unchecked-indexed-access

`"noUncheckedIndexedAccess": true`

This safety check isn't just limited to arrays. It also applies to object properties, helping you avoid trying to access a property that may not exist. 這種安全檢查不僅限於陣列。它也適用於物件屬性，説明您避免嘗試訪問可能不存在的屬性。

However, this feature does have its trade-offs. While it can help to catch errors and make your code safer, it can also be somewhat intrusive. 此功能確實有其缺點。雖然它可以説明捕獲錯誤並使您的代碼更安全，但它也可能具有一定的侵入性。

For example, if you're certain that a value exists, you may have to use non-null assertions or type narrowing to satisfy TypeScript.
例如，如果確定存在某個值，則可能必須使用非 null 斷言或類型縮小來滿足 TypeScript。


## 179.5-no-emit, Using TypeScript as a Linter
`"noEmit": true`
並且刪除： `"outDir": "dist",`


## module、moduleResolution 的設定記得兩個選擇就好:
180-module-nodenext-or-preserve.explainer

### 使用 TSC 編譯 TypeScript 時。 應該選擇 `module: NodeNext` 和 `moduleResolution: NodeNext`
### 使用其他轉譯器時，應選擇                `module: ESNext` 和 `moduleResolution: Bundler` 
- 在後端工作時，通常會選擇 `moduleResolution: NodeNext`；在前端工作時，通常會選擇 `moduleResolution: Bundler`

## "verbatimModuleSyntax": true
- verbatimModuleSyntax 設定使 TypeScript 更嚴格地處理 CommonJS 模組的匯出。
- 當啟用 verbatimModuleSyntax 時，不應該在 .cts 檔案中使用頂層的 export 關鍵字。
- 匯入 CommonJS 模組時需要使用 import 和 require 的結合語法，以確保類型安全。 
- verbatimModuleSyntax 設定能使編譯後的 JavaScript 代碼與 TypeScript 代碼幾乎相同，這對於維護代碼非常重要。


## 181-lib-vs-target.explainer
- TypeScript 的 lib 選項可以指定在程式環境中可使用哪些 JavaScript 新特性。
- TypeScript 的 target 選項則定義了目標 ECMAScript 版本。也就是說,TypeScript 會將程式碼編譯為該版本的 JavaScript 語法。
- 並不是所有新的 JavaScript 特性都會被 TypeScript 自動轉換或 polyfill。TypeScript 只會轉換語法,而不會處理新的 API 方法。
- 通常建議將 lib 和 target 選項的值保持一致,這樣可以確保只使用目標環境支援的特性,避免使用不支援的 API。 



## "declaration": true
- 在 tsconfig.json 中設置 "declaration": true，即可在編譯時生成 .d.ts 宣告檔。


## "declarationMap": true
Navigate to Source Files Instead of Declaration Files
啟用 declarationMap 選項可以生成一個 .d.ts.map 檔案,它可以幫助開發者快速地導航到原始碼中的函數定義,而不是直接查看 .d.ts 檔案。
開啟 declarationMap 選項在發布到 npm 時可能不太需要,因為使用者主要會使用建置好的程式碼而非原始碼。
但在 monorepo 環境中,當原始碼的變更直接影響到建置的程式碼時,宣告映射就變得非常有用。

## "jsx": "react-jsx"
可以使用「react-jsx」,會使用新版本的JSX轉換,原始碼不需要 `import React from 'react'`

## 分別設置 client 環境/ server 環境的 tsconfig.json
要用不同的資料夾，分別設置不同環境的 tsconfig

## 184-globals-are-tied-to-a-single-tsconfig.explainer
TypeScript 中的全域變數會被限制在特定的 tsconfig 設定中,這可以防止全域變數在不同環境中出現預期外的行為

## Extending a Base TypeScript Configuration

- 建立一個 `tsconfig.base.json` 作為基本設定檔,包含了專案中所有 tsconfig.json 共用的設定。
- 在各個 tsconfig.json 中使用 extends 屬性引用 tsconfig.base.json。
這樣可以在基本設定檔中進行變更,變更會自動套用到所有繼承的 tsconfig.json。
- extends 屬性只會複製 compilerOptions 部分的設定,不會複製 exclude 或 include 等屬性。
- 這個方法在大型專案或者 monorepo 架構中非常有用,可以大幅簡化 tsconfig.json 的管理


## 186-project-references
非常瑣碎，去看影片~

TypeScript 專案中如何有效地組織和管理不同模組的 TypeScript 設定檔。三種不同的解決方案,每一種都有各自的優缺點。

- 使用專案參考(Project References)可以有效地組織 TypeScript 設定檔,並提高類型檢查的效率。
- 可以將所有設定檔放在專案根目錄下,或是建立一個專門存放設定檔的 .config 資料夾。
- 使用專案參考時,需要啟用 composite: true 選項,並 `gitignore` tsbuildinfo 檔案


# Title

Title here!

## Exercises

- `tsconfig.json`
  - The file that contains compiler options and the files or folders to compile
  - Nesting `tsconfig.json` inside subfolders
    - Multiple `tsconfig.json` files can be in different subfolders of the project, and each will be treated as a separate project
  - The `extends` property can be used to inherit configuration from another `tsconfig.json` and override or add options.
- My recommended `tsconfig.json`
- Commonly used `tsconfig.json` attributes:
  - `jsx`
  - `strict`
    - `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, etc.
  - `noUncheckedIndexedAccess`
  - `moduleResolution`
  - `declaration` and `declarationMap`
