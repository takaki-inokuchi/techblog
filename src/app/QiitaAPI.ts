export const getAllArticle = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/qiita`);

  if (!res.ok) {
    throw new Error("記事の取得に失敗");
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.data;
};

export type BlogPost = {
  id: string;
  title: string;
  content: string;
};

export const getAllArticleCMS = async (): Promise<BlogPost[]> => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs`,
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
      },
    }
  );

  if (!res.ok) {
    throw new Error("記事の取得に失敗");
  }

  const data = await res.json();
  return data.contents;
};
