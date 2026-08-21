# React Lab

一個基於 **TypeScript + React + Vite** 建置的練習專案，旨在透過實作各種常見前端情境與互動元件，磨練 React 的狀態管理、Hook 運用與邏輯思維。

### 🛠️ 技術棧 (Tech Stack)

* **框架 / 核心**：[React 18](https://react.dev/)
* **語言**：[TypeScript](https://www.typescript.org/)
* **構建工具**：[Vite](https://vitejs.dev/)

### 🎯 練習重點 (Focus Areas)

本專案主要用於練習以下 React 邏輯：

* **State Management**：`useState`, `useReducer` 的狀態設計與複雜邏輯拆解
* **Side Effects & Lifecycle**：`useEffect` 的觸發時機控管與資源清理 (Clean-up)
* **Performance Optimization**：`useMemo`, `useCallback` 與 `React.memo` 的使用時機
* **Custom Hooks**：抽象化重複邏輯並提煉為可複用的自訂 Hook
* **Type Safety**：使用 TypeScript 嚴格定義 Component Props, Event 與 State 型別

### 🚀 快速開始 (Getting Started)

```bash
  # 安裝 node
  brew install node
  # 確認 npm 套件管理確實安裝
  npm -v
  # 開啟測試伺服器
  npm run dev
```

### 📁 專案結構 (Project Structure)

```
src/
├── assets/          # 靜態資源 (圖片、圖示等)
├── components/      # UI 元件與練習情境
├── hooks/           # 自訂 Custom Hooks
├── types/           # TypeScript 型別定義
├── utils/           # 通用 Utility functions
├── App.tsx          # 主頁面 / 練習展示入口
└── main.tsx         # 應用程式進入點
```
