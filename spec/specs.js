describe('RandomWord', function(){
  it("randomly pick a word from an array", function(){
    var testRandomWord = new RandomWord();
    // expect(testRandomWord.list).to.be.a('string');
    expect(testRandomWord).to.be.a('array');
  });

  it("creates another array of underscores, based on number of characters in word", function() {
    var testRandomWord = new RandomWord();
    expect(testRandomWord.underscoreWord()).to.be.a('array');
  });
});
