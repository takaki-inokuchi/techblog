// app/page.tsx

import QiitaListCMS from "./blogs/QiitaListCMS";
import QiitaList from "./qiita/VVVVV";

export default async function Home() {
  return (
    <div>
      <QiitaList />
      <QiitaListCMS />
    </div>
  );
}
