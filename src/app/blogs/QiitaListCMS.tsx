"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogPost } from "../type";
import { getAllArticleCMS } from "../API";

const QiitaListCMS = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllArticleCMS();
      setPosts(data);
    };
    fetchData();
  }, []);

  const displayPosts = showAll ? posts : posts.slice(0, 4);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mt-4 mb-4 text-slate-100">
          ブログ記事
        </h1>
        {!showAll && posts.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-slate-500 text-white rounded hover:bg-slate-900 transition"
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
          {displayPosts.map((post) => (
            <li key={post.id} className="bg-slate-800 rounded-lg shadow-md">
              <a
                href={`/blogs/${post.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.mainImage?.url ? (
                  <Image
                    src={post.mainImage.url}
                    width={600}
                    height={400}
                    alt="thumbnail"
                  />
                ) : null}
              </a>
              <h2 className="text-xl font-semibold text-slate-100 mb-3 hover:text-slate-400">
                {post.title}
              </h2>
              <div>{new Date(post.createdAt).toLocaleDateString()}</div>
              <div className="mt-4">
                <Link
                  href={`/blogs/${post.id}`}
                  className="text-blue-400 hover:underline hover:text-blue-300"
                >
                  記事を読む
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QiitaListCMS;
