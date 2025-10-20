import { getAllArticleCMS } from "@/app/qiitaAPI";
import React from "react";

type BlogPost = {
  id: string;
  title: string;
  content: string;
};

const CMSpage = async ({ params }: { params: { id: string } }) => {
  const res = await getAllArticleCMS();
  const article = res.find((item: BlogPost) => item.id === params.id);

  if (!article) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-100 mb-4">
        {article.title}
      </h1>
      <div>{article.content}</div>
    </div>
  );
};

export default CMSpage;
