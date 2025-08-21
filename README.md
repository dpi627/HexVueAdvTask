![](https://img.shields.io/badge/Node-js-5FA04E?logo=nodedotjs)
![](https://img.shields.io/badge/npm-CB3837?logo=npm)
![](https://img.shields.io/badge/nvm-555?logo=nvm)
![](https://img.shields.io/badge/Vite-ddd?logo=vite)
![](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs)
![](https://img.shields.io/badge/HTML-5-E34F26?logo=html5)
![](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![](https://img.shields.io/badge/CSS%203-663399?logo=css)
![](https://img.shields.io/badge/Bootstrap%205-ddd?logo=bootstrap)
![](https://img.shields.io/badge/GitHub-181717?logo=github)
![](https://img.shields.io/badge/Git-555?logo=git)
![](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint)
![](https://img.shields.io/badge/Prettier-555?logo=prettier)

# ✡️HexVueAdvTask

![](./assets/screenshot.png)

> [!IMPORTANT]
> 上圖為成品，線上 Live Demo 請至 https://dpi627.github.io/HexVueAdvTask/

# 🎯任務描述

進階任務 - 元件拆分與資料傳遞

# 📜需求功能描述

- 請嘗試將「商品列表」、「購物車」、「通知」拆分成 3 個元件
- 請使用 props 將商品資料傳遞至「商品列表」元件
- 「購物車」元件的刪除功能，請使用 emit 傳遞事件
- 使用 provide, inject 完成通知功能

# 📋前置作業

- 參考[基本版型](https://codepen.io/hexschool/pen/EaVwgmK)，導入相關樣式
- 檢索[開源圖資](https://unsplash.com/)，蒐集產品圖片
- 製作測試產品資料

<details>
<summary>🗃️測試資料(JSON)</summary>

```json
[
  {
    "id": 1,
    "name": "耳罩式藍牙耳機",
    "description": "舒適配戴，支援降噪技術",
    "price": 2490,
    "stock": 6,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 2,
    "name": "無線藍牙音箱",
    "description": "高音質立體聲，防水設計",
    "price": 1890,
    "stock": 0,
    "image": "https://images.unsplash.com/photo-1560701814-de5e72b8d346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGFibGUlMjBzcGVha2VyJTIwZ3JlZW58ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 3,
    "name": "智慧型手機",
    "description": "6.1吋螢幕，雙鏡頭設計",
    "price": 15990,
    "stock": 12,
    "image": "https://images.unsplash.com/photo-1648962495517-8398a95fe12f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjZWxsJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 4,
    "name": "機械鍵盤",
    "description": "青軸手感，RGB背光",
    "price": 3290,
    "stock": 3,
    "image": "https://plus.unsplash.com/premium_photo-1685312182226-20af33367686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGtleWJvYXJkfGVufDB8fDB8fHww"
  },
  {
    "id": 5,
    "name": "智慧手錶",
    "description": "健康監測，多種運動模式",
    "price": 4990,
    "stock": 7,
    "image": "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 6,
    "name": "平板電腦",
    "description": "10.9吋，256GB儲存",
    "price": 18900,
    "stock": 2,
    "image": "https://images.unsplash.com/photo-1628591459313-a64214c5bfac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
  }
]
```

</details>

# 🎉完成項目

- [x] 將「商品列表」、「購物車」、「通知」拆分成 3 個元件
- [x] 使用 props 將商品資料傳遞至「商品列表」元件
- [x] 「購物車」元件的刪除功能使用 emit 傳遞事件
- [ ] 使用 provide, inject 完成通知功能

> [!NOTE]
>
> - 購物車刪除功能未完整使用 `emit`，但其中的「恢復庫存」有
> - provide 與 inject 課程未提及，改用 `Pinia` 處理

# 🚀額外完成

| 項目              | 說明                                   |
| ----------------- | -------------------------------------- |
| 🍍 Pinia 狀態管理 | 建立元件 `cart.js` 與 `toast.js`       |
| 📭 空資料提示     | 當商品清單或購物車沒有資料時，顯示提示 |
| 📦 庫存顯示邏輯   | 低於 5 顯示紅色，0 無法加入購物車      |
| ♻️ 庫存恢復功能   | 刪除購物車商品時恢復庫存 ( `emit`)     |
| 🖼️ 縮圖顯示       | 購物車和通知顯示商品圖片               |
| 🕝 通知自動移除   | 通知預設 3 秒後自動移除                |
| 💬 通知上限       | 避免連續通知過多造成干擾 ( `props`)    |
| 📱 SweetAlert2    | 購物車刪除確認提示                     |
| 💰 價格千分位     | 於 `utils` 建立通用函示                |

# ✨關鍵檔案

```sh
src/
├── App.vue                 # 主應用元件，整合商品列表與購物車
├── main.js                 # 應用程式入口，配置 Pinia
├── components/             # Vue 元件目錄
│   ├── CartList.vue        # 購物車元件 (支援 emit 事件)
│   ├── ProductList.vue     # 商品列表元件 (接收 props)
│   └── ToastNotify.vue     # 通知元件 (支援上限設定)
├── stores/                 # Pinia 狀態管理目錄
│   ├── cart.js             # 購物車狀態管理
│   └── toast.js            # 通知狀態管理
└── utils/                  # 通用工具函數目錄
    └── priceFormatter.js   # 價格千分位格式化函數
```

# 🤖AI 輔助

![](./assets/ai-support.png)

- AI 介入成分低，上圖是 8/20 資訊，24 小時重置
- 開發期間關閉自動完成改人工撰寫，希望獲取更好學習成效
- AI 主要用於生成 commit message 與以下圖表製作，非任務主軸要求

## 元件關係圖

```mermaid
graph TB
    subgraph "Vue Application"
        App["App.vue<br/>主應用元件"]

        subgraph "Components"
            PL["ProductList.vue<br/>商品列表"]
            CL["CartList.vue<br/>購物車"]
            TN["ToastNotify.vue<br/>通知"]
        end

        subgraph "Stores (Pinia)"
            CS["cart.js<br/>購物車狀態"]
            TS["toast.js<br/>通知狀態"]
        end

        subgraph "Utils"
            PF["priceFormatter.js<br/>價格格式化"]
        end
    end

    App -->|props: products| PL
    App -->|return-stock| CL
    App --> TN

    PL --> CS
    PL --> TS
    CL --> CS
    TN --> TS

    PL --> PF
    CL --> PF

    style App fill:#e1f5fe
    style CS fill:#fff3e0
    style TS fill:#fff3e0
    style PF fill:#f3e5f5
```

## 加入購物車流程

```mermaid
sequenceDiagram
    participant U as 使用者
    participant PL as ProductList
    participant CS as CartStore
    participant TS as ToastStore
    participant TN as ToastNotify

    U->>PL: 點擊加入購物車
    PL->>PL: 檢查庫存 > 0
    PL->>PL: 減少商品庫存
    PL->>CS: cart.add(product)
    CS->>CS: 更新購物車項目
    PL->>TS: toast.add(product)
    TS->>TS: 新增通知項目
    TS->>TN: 觸發通知顯示
    TN->>U: 顯示成功通知

    Note over TS,TN: 3秒後自動移除通知
    TS-->>TN: 自動移除通知
```

## 刪除購物車商品流程

```mermaid
sequenceDiagram
    participant U as 使用者
    participant CL as CartList
    participant SA as SweetAlert2
    participant CS as CartStore
    participant App as App.vue

    U->>CL: 點擊刪除按鈕
    CL->>SA: 顯示確認對話框
    SA->>U: "確定移除商品？"
    U->>SA: 確認刪除
    SA->>CL: 確認結果
    CL->>CS: cart.remove(item)
    CS->>CS: 移除購物車項目
    CL->>App: emit('return-stock', item)
    App->>App: 恢復商品庫存
```

## Pinia 元件狀態

```mermaid
stateDiagram-v2
    state CartList {
        [*] --> 顯示購物車
        顯示購物車 --> 有商品 : items.length > 0
        顯示購物車 --> 空購物車 : items.length = 0
        有商品 --> 刪除確認 : 點擊刪除
        刪除確認 --> 移除商品 : 確認
        刪除確認 --> 有商品 : 取消
        移除商品 --> 恢復庫存
        恢復庫存 --> 顯示購物車
    }

    state ToastNotify {
        [*] --> 等待通知
        等待通知 --> 顯示通知 : 新增商品
        顯示通知 --> 檢查上限
        檢查上限 --> 正常顯示 : 未達上限
        檢查上限 --> 上限警告 : 超過上限
        正常顯示 --> 自動移除 : 3秒後
        正常顯示 --> 手動移除 : 點擊關閉
        上限警告 --> 等待通知
        自動移除 --> 等待通知
        手動移除 --> 等待通知
    }
```

## 資料結構圖

```mermaid
erDiagram
    Product {
        number id PK
        string name
        string description
        number price
        number stock
        string image
    }

    CartItem {
        number id PK
        string name
        string description
        number price
        string image
        number quantity
        number subtotal
    }

    ToastItem {
        number id PK
        string name
        string image
        timestamp createdAt
    }

    ProductStore {
        array products
    }

    CartStore {
        array items
        number totalPrice
        number totalCount
    }

    ToastStore {
        array items
        number totalCount
    }

    Product ||--o{ CartItem : "加入購物車"
    Product ||--o{ ToastItem : "產生通知"
    ProductStore ||--o{ Product : "包含"
    CartStore ||--o{ CartItem : "管理"
    ToastStore ||--o{ ToastItem : "管理"
```

# 📚Resource

- Pinia: https://pinia.vuejs.org/zh/
- SweetAlert: https://sweetalert2.github.io/
