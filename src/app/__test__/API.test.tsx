import { getAllArticle, getAllArticleCMS } from "../API";

global.fetch = jest.fn();

describe("getAllArticle,getAllArticleCMS", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetAllMocks();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test("getAllArticle:環境変数なしのテスト", async () => {
    delete process.env.NEXT_PUBLIC_BASE_URL;

    await expect(getAllArticle()).rejects.toThrow(
      "環境変数 NEXT_PUBLIC_BASE_URL が設定されていません"
    );
  });

  test("getAllArticleCMS:環境変数なしのテスト", async () => {
    delete process.env.NEXT_PUBLIC_BASE_URL;

    await expect(getAllArticleCMS()).rejects.toThrow(
      "環境変数 NEXT_PUBLIC_BASE_URL が設定されていません"
    );
  });

  test("getAllArticle:fetchが失敗する場合", async () => {
    process.env.NEXT_PUBLIC_BASE_URL = "https//example.com";

    (global.fetch as any).mockResolvedValueOnce({ ok: false });
    await expect(getAllArticle()).rejects.toThrow("記事の取得に失敗");
  });

  test("getAllArticleCMS:fetchが失敗する場合", async () => {
    process.env.NEXT_PUBLIC_BASE_URL = "https//example.com";

    (global.fetch as any).mockResolvedValueOnce({ ok: false });
    await expect(getAllArticleCMS()).rejects.toThrow("記事の取得に失敗");
  });

  test("getAllArticle:fetchが成功する場合", async () => {
    process.env.NEXT_PUBLIC_BASE_URL = "https//example.com";

    const mockcontens = [
      {
        id: "1",
        title: "title1",
        url: "https//example.com",
        created_at: "2025/10/23",
        thumbnail: "https//example.com",
        content: "content1",
      },
    ];

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: mockcontens }),
    });
    const res = await getAllArticle();
    expect(res).toEqual(mockcontens);
  });

  test("getAllArticleCMS:fetchが成功する場合", async () => {
    process.env.NEXT_PUBLIC_BASE_URL = "https//example.com";

    const mockcontens = [
      {
        id: "1",
        title: "title1",
        content: "https//example.com",
        createdAt: "2025/10/23",
        mainImage: {
          url: "https//example.com",
          width: 600,
          height: 400,
        },
      },
    ];

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: mockcontens }),
    });
    const res = await getAllArticleCMS();
    expect(res).toEqual(mockcontens);
  });
});
