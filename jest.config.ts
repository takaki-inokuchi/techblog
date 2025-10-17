import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./", // Next.js アプリのルート
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  // ✅ setupファイルを追加
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // ← .jsでもOK
};

// next/jest は非同期な設定も処理するため createJestConfig に渡す
export default createJestConfig(config);
