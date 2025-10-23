import { GET } from "../api/blogs/route";
import { BlogPost } from "../type";

jest.mock("next/server", () => ({
  NextResponse: {
    json: (data: jest.Mock, init?: jest.Mock) => ({
      ...init,
      json: async () => data,
    }),
  },
}));

global.fetch = jest.fn();

describe("GET /api/blogs", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetAllMocks();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test("環境変数がない場合は500を返す", async () => {
    delete process.env.MICROCMS_SERVICE_DOMAIN;
    delete process.env.MICROCMS_API_KEY;

    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json.message).toBe("環境変数が設定されていません");
  });

  test("fetchが失敗した場合", async () => {
    process.env.MICROCMS_SERVICE_DOMAIN = "example";
    process.env.MICROCMS_API_KEY = "testkey";

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });
    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json.message).toBe("記事の取得に失敗");
  });

  test("fetchが成功したとき", async () => {
    process.env.MICROCMS_SERVICE_DOMAIN = "example";
    process.env.MICROCMS_API_KEY = "testkey";

    const mockBlogPosts: BlogPost[] = [
      {
        id: "1",
        title: "テスト記事1",
        content: "記事の内容1",
        createdAt: "2025-10-23",
        mainImage: {
          url: "https://exmaple.com",
          width: 600,
          height: 400,
        },
      },
      {
        id: "2",
        title: "テスト記事2",
        content: "記事の内容2",
        createdAt: "2025-10-23",
        mainImage: {
          url: "https://exmaple.com",
          width: 600,
          height: 400,
        },
      },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ contents: mockBlogPosts }),
    });

    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual(mockBlogPosts);
  });
});
