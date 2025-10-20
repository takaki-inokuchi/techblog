export const getAllArticle = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/qiita`);

  if (!res.ok) {
    throw new Error("記事の取得に失敗");
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.data;
};
