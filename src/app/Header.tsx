import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl">
          <Link href="/">Qiita記事</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
