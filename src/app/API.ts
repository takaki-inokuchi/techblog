import { BlogPost } from "./type";

export const getAllArticle = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("環境変数 NEXT_PUBLIC_BASE_URL が設定されていません");
  }

  const res = await fetch(`${baseUrl}/api/qiita`);

  if (!res.ok) {
    throw new Error("記事の取得に失敗");
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.data;
};

export const getAllArticleCMS = async (): Promise<BlogPost[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("環境変数 NEXT_PUBLIC_BASE_URL が設定されていません");
  }

  const res = await fetch(`${baseUrl}/api/blogs`);

  if (!res.ok) {
    throw new Error("記事の取得に失敗");
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.data;
};
