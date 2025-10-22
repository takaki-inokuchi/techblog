import { act, fireEvent, render, screen } from "@testing-library/react";
import QiitaListCMS from "../blogs/QiitaListCMS";

jest.mock("../API", () => ({
  getAllArticleCMS: jest.fn().mockResolvedValue([
    {
      id: "1",
      title: "記事1",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
      readMoreText: "記事を読む",
    },
    {
      id: "2",
      title: "記事2",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
      readMoreText: "記事を読む",
    },
    {
      id: "3",
      title: "記事3",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
      readMoreText: "記事を読む",
    },
    {
      id: "4",
      title: "記事4",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
      readMoreText: "記事を読む",
    },
     {
      id: "5",
      title: "記事5",
      creratedAT: "2025-01-01",
      mainImage: { url: "/img1,jpg" },
      readMoreText: "記事を読む",
    },
  ]),
}));

describe("表示できているかどうか", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<QiitaListCMS />);
    });
  });

  test("ブログ記事という文字列", async () => {
    expect(await screen.findByText("ブログ記事")).toBeInTheDocument();
  });
  test("記事を読むという文字列", async () => {
    const links = await screen.findAllByText("記事を読む");
    expect(links).toHaveLength(4);
  });
});

describe("ボタン表示テスト", () => {
  let moreButton: HTMLElement;

  beforeEach(async () => {
    await act(async () => {
      render(<QiitaListCMS />);
    });
    moreButton = await screen.findByRole("button", { name: "もっと見る" });
  });
  test("もっと見る → 閉じる", async () => {
    await act(async () => {
      fireEvent.click(moreButton);
    });
    const closeButton = await screen.findByRole("button", { name: "閉じる" });
    expect(closeButton).toBeInTheDocument();
  });

  test("もっと見る → 閉じる → もっと見る", async () => {
    await act(async () => {
      fireEvent.click(moreButton);
    });

    const closeButton = await screen.findByRole("button", { name: "閉じる" });
    await act(async () => {
      fireEvent.click(closeButton);
    });

    const showMoreButton = await screen.findByRole("button", {
      name: "もっと見る",
    });
    expect(showMoreButton).toBeInTheDocument();
  });
});
