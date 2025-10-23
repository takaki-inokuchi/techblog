# tech ブログアプリ

tech ブログアプリは、Qiita の投稿記事を確認する Web サイトです。

## 目次

1. [デモ](#デモ)
2. [主な機能](#主な機能)
3. [使用技術](#使用技術)
4. [環境構築](#環境構築)
5. [必要条件](#必要条件)
6. [手順](#手順)
7. [アプリデモ](#アプリデモ)

## デモ

本番サイト：[https://techblog-tawny.vercel.app/](https://techblog-tawny.vercel.app/)

## 主な機能

- Qiita の記事を一覧で確認可能
- リンクを押すことで詳細ページへ移動
- Vercel での公開

## 使用技術

- **フロントエンド**: React, Next.js
- **外部 API 連携**: Qiita API, microCMS API
- **バッチ処理**: Node.js, ts-node
- **CI/CD / 自動化**: GitHub Actions
- **言語**: JavaScript / TypeScript
- **テスト**: Jest, React Testing Library

## 環境構築

### 必要条件

- Node.js v20+
- npm v8+
- microCMS アカウント

### 手順
```bash
git https://github.com/takaki-inokuchi/techblog.git
cd techblog
```