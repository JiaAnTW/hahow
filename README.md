# Hahow Frontend Engineer 徵才小專案

https://jiaantw.github.io/hahow/#/heroes

## 環境設定

本專案開發使用 node.js v.12，請移動至專案目錄後執行

```
npm i
```

### 開發環境

```
npm run dev
```

開發 server 會在

```
http://localhost:8080/#/heroes
http://localhost:8080/#/heroes/:heroId
```

### 部屬

執行以下指令後，bundle.js 會產生在 build 資料夾下。

> 此資料夾會預設被 git ignore

```
npm run build
```

## 專案架構

```
|___ build
|   |___ index.html
|   |___ bundle.js(編譯後產生)
|
|___ src
    |___ index.js(React進入點)
    |___ theme(共用的styled-component設定)
    |
    |___ component(共用的元件)
    |   |___ XXXX (元件)
    |       |___ index.js(邏輯處理/View繪製)
    |       |___ style.js(個別的styled-component)
    |
    |___ models(redux相關)
    |
    |___ pages
        |___ index.js(路由控制)
        |___ XXXX (個別頁面的Presenter/hook/專用元件)
            |___ index.js(邏輯處理 or View繪製)
            |___ style.js(個別的styled-component)
            |___ YYYY (不一定有，為和XXXX相同的巢狀結構)
```

## 第三方 Libary

-   redux:
    -   說明: 基於 Flux 結構、Single Source 的狀態管理工具。由於本專案較小，所以採用原生 redux。開發時經常會搭配一些簡化 Redux 流程、處理 Immutable 的套件，如 redux-toolkits, redux-actions 等。
-   redux-thunk:
    -   說明: 在 redux 中處理、簡化非同步事件的 middleware。
-   styled-components:
    -   說明: 一種 React 常見的 CSS in JS 解決方案，以 JS, 字串模板的方式使用。
-   lodash:
    -   說明: 操作 array、object 的函式庫，可以讓我們常見對於容器的操作變的更簡化、易讀。
-   prettier
    -   說明: 自動化統一 format

## 註解原則

參考 clean code 所提及，當我認為不易從函式、變數命名來理解程式邏輯時，就會透過寫註解來說明。例如:

-   src\pages\Hero\HeroProfile\useHeroSkill.js

```jsx
useEffect(() => {
    if (
        !isEmpty(heroListData) &&
        heroListData[heroId] &&
        isEmpty(heroListData[heroId].skill)
    )
        dispatch(fetchHeroSkillById(heroId));
}, [heroListData, dispatch, heroId]);
```

這段程式碼的 if 中有多個條件，且加入了一段乍看不必要，但其實是用來處理例外情形的條件。這裡我就會用註解說明。

> 也就是我會優先從 class/函式/變數名稱去提升可讀性

## 遇到的困難

-   不確定 index.html 該放在哪比較好
    -   說明: 因為在這個專案 html 不需要特別編譯過，所以沒有使用`html-webpack-plugin`。以往習慣把打包後的檔案放在 build，打包前的放在 public。這次想說就直接把 index.html 放在 build。但因為過去會讓 git ignore build，所以一開始 commit 的時候就漏掉了這個檔案。
    -   解決方法: 先把只有 index.html 的 build 資料夾 push 上去後再 ignore 掉。但自己覺得專案大一點的時候還是打包前後分開比較好，也能處理需要拆分 bundle.js 的情況。
