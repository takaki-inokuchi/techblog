import { getAllArticle } from "@/app/QiitaAPI";
import { Qiita } from "@/app/type";
import Image from "next/image";

const QiitaArticle = async ({ params }: { params: { id: string } }) => {
  const qiitadata = await getAllArticle();
  const article = qiitadata.find((item: Qiita) => item.id === params.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={article.thumbnail}
        alt="記事のサムネイル"
        width={500}
        height={200}
        className="mx-auto"
      />
      <h1 className="text-center text-2xl mb-4 mt-4">{article.title}</h1>
      <div className="leading-relaxed">{article.content}</div>
      <div className="py-3">公開日{article.created_at}</div>
    </div>
  );
};

export default QiitaArticle;
