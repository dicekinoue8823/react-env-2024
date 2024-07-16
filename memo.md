
# プロジェクトの作成
''''
npm create vite@latest

cd react-env-2024
npm install
npm run dev
''''

# Tailwind CSSのインストール
''''
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
''''

# tsconfig.app.json
''''
/* import aliases */
"baseUrl": "./",
"paths": {
"@/*": ["src/*"]
}
''''

''''
npm i -D vite-tsconfig-paths
''''

# vite.config.ts
''''
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), tsconfigPaths()],
})
''''

