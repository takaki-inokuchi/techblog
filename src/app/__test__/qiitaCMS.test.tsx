import { fireEvent, render, screen } from "@testing-library/react";
import QiitaListCMS from "../blogs/qiitaCMS";

describe("表示できているかどうか", () => {
  test("ブログ記事という文字列", () => {
    render(<QiitaListCMS />);
    expect(screen.getByText("ブログ記事")).toBeInTheDocument();
  });
  test("記事を読むという文字列", () => {
    expect(screen.getByText("記事を読む")).toBeInTheDocument();
  });
});

describe("もっと見るボタン", () => {
  test("投稿4件以上でshowAllがfalseになる");
});

jest.mock("../QiitaAPI", () => ({
  getAllArticleCMS: jest.fn().mockResolvedValue([
    {
      id: "1",
      title: "記事",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
    },
    {
      id: "2",
      title: "記事",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
    },
    {
      id: "3",
      title: "記事",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
    },
    {
      id: "4",
      title: "記事",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
    },
    {
      id: "5",
      title: "記事",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
    },
  ]),
}));

const setup = async () => {
  render(<QiitaListCMS />);
  const moreButton = await screen.findByRole("button", { name: "もっと見る" });
  return { moreButton };
};

describe("ボタン表示テスト", () => {
  test("初期表示に戻るボタンが表示される", async () => {
    expect((await setup()).moreButton).toBeInTheDocument();
  });
  test("もっと見る → 閉じる", async () => {
    const { moreButton } = await setup();
    fireEvent.click(moreButton);
    expect(screen.getByRole("button", { name: "閉じる" })).toBeInTheDocument();
  });
  test("もっと見る → 閉じる → もっと見る", async () => {
    const { moreButton } = await setup();
    fireEvent.click(moreButton);
    fireEvent.click(screen.getByRole("button", { name: "閉じる" }));
    expect(
      screen.getByRole("button", { name: "もっと見る" })
    ).toBeInTheDocument();
  });
});
