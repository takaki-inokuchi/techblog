// app/page.tsx

import QiitaListCMS from "./blogs/QiitaListCMS";
import QiitaList from "./qiita/qiitalist";

export default async function Home() {
  return (
    <div>
      <QiitaList />
      <QiitaListCMS />
    </div>
  );
}
