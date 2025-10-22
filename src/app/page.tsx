// app/page.tsx

import QiitaListCMS from "./blogs/QiitaListCMS";
import QiitaList from "./qiita/QiitaList";

export default async function Home() {
  return (
    <div>
      <QiitaList />
      <QiitaListCMS />
    </div>
  );
}
