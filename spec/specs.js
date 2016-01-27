describe('hangman', function(){
  it("randonly pick a word from an array", function(){
    expect(hangman()).to.be.a('string');
  });
});
