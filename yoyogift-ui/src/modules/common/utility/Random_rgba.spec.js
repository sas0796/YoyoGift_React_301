import { Random_rgba } from "./Random_rgba";

describe("Random RGBA Test Suite", () => {
  it("should run", () => {
    const result = Random_rgba();
    expect(result.length).toBeGreaterThan(5);
  })
});
