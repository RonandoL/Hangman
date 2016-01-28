describe('RandomWord', function(){
  it("randomly pick a word from an array", function(){
    var testHangMan = new HangMan();
    testHangMan.word = "cat";
    expect(testHandMan.word).to.equal('cat');
    expect(testHandMan.score).to.equal('cat');
  });

  it("creates another array of underscores, based on number of characters in word", function() {
    var testRandomWord = new RandomWord();
    expect(testRandomWord.underscoreWord()).to.be.a('array');
  });
});
