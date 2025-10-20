// app/page.tsx

import QiitaList from "./qiita/qiitalist";

export default async function Home() {
  return (
    <div>
      <QiitaList />
    </div>
  );
}
