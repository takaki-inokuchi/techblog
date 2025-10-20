import { QiitaItmes } from "@/app/type";
import { NextResponse } from "next/server";

const thumbnail = "https://picsum.photos/id/1/600/600";

export async function GET() {
  const token = process.env.QIITA_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Qiitaトークンが設定されていません" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      "https://qiita.com/api/v2/authenticated_user/items",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: "Qiitaのユーザー情報の取得に失敗しました" },
        { status: res.status }
      );
    }

    const data = await res.json();

    const articles = data.slice(0, 4).map((item: QiitaItmes) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      created_at: item.created_at,
      thumbnail: thumbnail,
      content: item.body,
    }));
    return NextResponse.json(articles);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "不明なエラーが発生しました。";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
