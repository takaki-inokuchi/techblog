import Link from "next/link";
import { getAllArticleCMS } from "../qiitaAPI";

export default async function Home() {
  const qiitadata = await getAllArticleCMS();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-slate-100">ブログ記事一覧</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {qiitadata.map((post) => (
          <li key={post.id} className="bg-slate-800 rounded-lg shadow-md ">
            <h2 className="text-xl font-semibold text-slate-100 mb-2">
              {post.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {post.content.length > 120
                ? `${post.content.substring(0, 120)}...`
                : post.content}
            </p>
            <div className="mt-4">
              <Link
                href={`/pages/${post.id}`}
                className="text-blue-400 hover:underline hover:text-blue-300"
              >
                続きを読む
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
