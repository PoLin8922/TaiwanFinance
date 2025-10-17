# TaiwanFinance 部署指南

## 前端部署 (Vercel)

1. 前往 [Vercel](https://vercel.com) 並登入
2. 點擊 "New Project"
3. 導入您的 GitHub 儲存庫
4. 設定以下部署選項：
   - Framework Preset: Vite
   - Root Directory: frontend
   - Build Command: npm run build
   - Output Directory: dist
   
5. 設定環境變數：
   ```
   VITE_API_URL=https://[your-app-name].onrender.com
   ```

## 後端部署 (Render)

1. 前往 [Render](https://render.com) 並登入
2. 點擊 "New Web Service"
3. 連結您的 GitHub 儲存庫
4. 設定以下選項：
   - Name: taiwanfinance-api
   - Root Directory: backend
   - Runtime: Node
   - Build Command: npm install && npm run build
   - Start Command: npm start

5. 設定環境變數：
   ```
   NODE_ENV=production
   PORT=8080
   DATABASE_URL=[您的 Neon Database 連線字串]
   CORS_ORIGIN=https://[您的 Vercel 域名]
   ```

## 資料庫設定 (Neon)

1. 前往 [Neon](https://neon.tech) 建立帳號
2. 建立新的資料庫專案
3. 複製連線字串
4. 在 Render 的環境變數中設定 DATABASE_URL

## 本地開發設定

1. 前端開發：
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. 後端開發：
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. 環境變數設定：
   - 前端 (.env.local):
     ```
     VITE_API_URL=http://localhost:5000
     ```
   
   - 後端 (.env):
     ```
     NODE_ENV=development
     PORT=5000
     DATABASE_URL=[本地資料庫連線字串]
     CORS_ORIGIN=http://localhost:5173
     ```

## 注意事項

1. 確保 Render 和 Vercel 的環境變數都已正確設定
2. 本地開發時使用 .env.local 來覆蓋環境變數
3. 部署前先在本地測試所有功能
4. 確保資料庫遷移已經執行
5. 檢查 CORS 設定是否正確