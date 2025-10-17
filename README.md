# TaiwanFinance - 台灣理財應用

這是一個專門為台灣使用者設計的理財應用程式，採用前後端分離架構。

## 專案架構

```
taiwanfinance/
├── frontend/           # React + Vite 前端專案
│   ├── src/           # 源代碼
│   ├── public/        # 靜態資源
│   └── package.json   # 前端依賴
│
└── backend/           # Express 後端專案
    ├── src/          # 源代碼
    ├── dist/         # 編譯後的程式碼
    └── package.json  # 後端依賴
```

## 本地開發

### 前端開發
```bash
cd frontend
npm install
npm run dev
```
前端將在 http://localhost:5173 運行

### 後端開發
```bash
cd backend
npm install
npm run dev
```
後端 API 將在 http://localhost:5000 運行

## 環境變數設定

### 前端 (.env.development / .env.production)
- VITE_API_URL: API 伺服器網址
- VITE_ENV: 環境設定 (development/production)

### 後端 (.env)
- PORT: 伺服器埠口
- DATABASE_URL: Neon Database 連線字串
- NODE_ENV: 環境設定 (development/production)

## 部署說明

### 前端部署 (Vercel)
1. Fork 此專案到您的 GitHub
2. 在 Vercel 中導入專案
3. 設定以下部署配置：
   - Framework Preset: Vite
   - Root Directory: frontend
   - Build Command: npm run build
   - Output Directory: dist

### 後端部署 (Render)
1. 在 Render 中建立新的 Web Service
2. 連結您的 GitHub 儲存庫
3. 設定以下部署配置：
   - Root Directory: backend
   - Build Command: npm install && npm run build
   - Start Command: npm start
4. 設定環境變數

## API 文件

詳細的 API 文件請參考：
[API 文件連結]

## 資料庫設定

此專案使用 Neon Database (PostgreSQL)，請確保您已經：
1. 在 Neon 建立資料庫
2. 設定正確的資料庫連線字串
3. 運行資料庫遷移：`npm run db:push`

## 注意事項

1. 確保 Node.js 版本 >= 18
2. 本地開發時需同時運行前後端服務
3. 部署時需要分別部署前端和後端

## License

MIT