"use client";
import { Qiita } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllArticle } from "../qiitaapi";

const QiitaList = () => {
  const [posts, setPosts] = useState<Qiita[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllArticle();
      setPosts(data);
    };
    fetchData();
  }, []);

  const displayPosts = showAll ? posts : posts.slice(0, 4);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mt-4 mb-4 text-slate-100">
          個人記事
        </h1>
        {!showAll && posts.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-slate-500 text-white rounded hover:bg-slate-900"
            >
              もっと見る
            </button>
          </div>
        )}
        {showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2 bg-slate-500 text-white rounded hover:bg-slate-900"
            >
              閉じる
            </button>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {displayPosts.map((article: Qiita) => (
            <li key={article.id} className="bg-slate-800 rounded-lg shadow-md ">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={article.thumbnail}
                  width={600}
                  height={400}
                  alt="thumbnail"
                />
              </a>
              <h2 className="text-xl font-semibold text-slate-100 mb-3 hover:text-slate-400">
                {article.title}
              </h2>
              <div>{new Date(article.created_at).toLocaleDateString()}</div>

              <div className="hover:text-red-800 text-red-400">
                <Link href={`/qiita/${article.id}`}>記事を読む</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QiitaList;
