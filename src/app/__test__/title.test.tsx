import { render } from "@testing-library/react";
import Title from "../title/title";

describe("Title表示できているかどうか", () => {
  test("表示？", () => {
    render(<Title />);
    expect(document.title).toBe("タイトルだよ");
  });
});
