import { BlogPost } from "@/app/type";
import { NextResponse } from "next/server";

export async function GET() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    return NextResponse.json(
      { message: "環境変数が設定されていません" },
      { status: 500 }
    );
  }

  const res = await fetch(`https://${serviceDomain}.microcms.io/api/v1/blogs`, {
    headers: { "X-API-KEY": apiKey },
  });

  if (!res.ok) {
    return NextResponse.json({ message: "記事の取得に失敗" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data.contents as BlogPost[]);
}
