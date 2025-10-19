"use client";

import { Qiita } from "@/app/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const QiitaList = () => {
  const [articles, setArticles] = useState<Qiita[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("/api/qiita");
      const data = await res.json();
      const articles = Array.isArray(data) ? data : data.data;
      setArticles(articles || []);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Qiita記事一覧（テスト4件）</h1>
      <ul>
        {articles.map((article: Qiita) => (
          <li key={article.id} style={{ marginBottom: "20px" }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Image src={article.thumbnail} width={200} height={150} alt="thumbnail" />
              <div>{article.title}</div>
              <div>{new Date(article.created_at).toLocaleDateString()}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QiitaList;
