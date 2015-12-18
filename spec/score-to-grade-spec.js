describe("score-to-grade-spec", function() {
  it("When the input score is >= 90 and < 100, return S", function() {
    expect(getScoreLevel(99)).toBe('S');
  });
  it("When the input score is >= 90 and < 100, return S", function() {
    expect(getScoreLevel(90)).toBe('S');
  });
  
  it("When the input score is >= 80 and <90 , return A", function() {
    expect(getScoreLevel(89)).toBe('A');
  });
  it("When the input score is >= 80 and < 90, return A", function() {
    expect(getScoreLevel(80)).toBe('A');
  });
  
  it("When the input score is >= 70 and < 80, return B", function() {
    expect(getScoreLevel(79)).toBe('B');
  });
  it("When the input score is >= 70 and < 80, return B", function() {
    expect(getScoreLevel(70)).toBe('B');
  });
  
  it("When the input score is >= 60 and < 70, return C", function() {
    expect(getScoreLevel(69)).toBe('C');
  });
  it("When the input score is >= 60 and < 70, return C", function() {
    expect(getScoreLevel(60)).toBe('C');
  });
  
  it("When the input score is >= 0 and < 60, return D", function() {
    expect(getScoreLevel(59)).toBe('D');
  });
  it("When the input score is >= 0 and < 60, return D", function() {
    expect(getScoreLevel(0)).toBe('D');
  });
  
  it("when the input is not a correct input", function() {
    expect(function() {
      getScoreLevel(-1)
    }).toThrowError("not a correct score");
  });
  it("when the input is not a correct input", function() {
    expect(function() {
      getScoreLevel("good")
    }).toThrowError("not a correct score");
  });
});