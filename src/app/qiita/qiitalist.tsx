
import { Qiita } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import { getAllArticle } from "../qiitaAPI";

const QiitaList = async () => {
  const articles = await getAllArticle();

  return (
    <div>
      <h1>Qiita記事一覧（テスト4件）</h1>
      <ul className="">
        {articles.map((article: Qiita) => (
          <li key={article.id} className="border-b pb-6">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={article.thumbnail}
                width={200}
                height={150}
                alt="thumbnail"
              />
            </a>
            <div>{article.title}</div>
            <div>{new Date(article.created_at).toLocaleDateString()}</div>
            <div>
              {article.content.length > 120
                ? article.content.substring(0, 120)
                : article.content}{" "}
              ...
            </div>
            <div className="hover:text-red-800 text-red-400">
              <Link href={`/qiita/${article.id}`}>続きを読む</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QiitaList;
