import { comparePointsAsc, comparePointsDesc, compareCountAsc,
  compareCountDesc, compareValidityAsc, compareValidityDesc } from "./CompareForSort";


describe("CompareForSort Test Suite", () => {
  it("Compare Points Ascending", () => {
    var result = comparePointsAsc({ cardPoints: 1 }, { cardPoints: 2 });
    expect(result).toBe(-1);

    var result = comparePointsAsc({ cardPoints: 2 }, { cardPoints: 1 });
    expect(result).toBe(1);
  });

  it("Compare Points Descending", () => {
    var result = comparePointsDesc({ cardPoints: 1 }, { cardPoints: 2 });
    expect(result).toBe(1);

    var result = comparePointsDesc({ cardPoints: 2 }, { cardPoints: 1 });
    expect(result).toBe(-1);
  });

  it("Compare Count Ascending", () => {
    var result = compareCountAsc({ cardCount: 1 }, { cardCount: 2 });
    expect(result).toBe(-1);

    var result = compareCountAsc({ cardCount: 2 }, { cardCount: 1 });
    expect(result).toBe(1);
  });

  it("Compare Count Descending", () => {
    var result = compareCountDesc({ cardCount: 1 }, { cardCount: 2 });
    expect(result).toBe(1);

    var result = compareCountDesc({ cardCount: 2 }, { cardCount: 1 });
    expect(result).toBe(-1);
  });

  it("Compare Validity Ascending", () => {
    var result = compareValidityAsc({ cardExpiryDate: 1 }, { cardExpiryDate: 2 });
    expect(result).toBe(-1);

    var result = compareValidityAsc({ cardExpiryDatecardExpiryDate: 2 }, { cardCount: 1 });
    expect(result).toBe(0);
  });

  it("Compare Validity Descending", () => {
    var result = compareValidityDesc({ cardExpiryDate: 1 }, { cardExpiryDate: 2 });
    expect(result).toBe(1);

    var result = compareValidityDesc({ cardExpiryDate: 2 }, { cardExpiryDate: 1 });
    expect(result).toBe(-1);
  });
});
