import { sub}  from "../src/sub";

describe("sub", () => {
  it("subtracts two numbers", () => {
    expect(sub(5, 3)).toBe(2);
  });
});

