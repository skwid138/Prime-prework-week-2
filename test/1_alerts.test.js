describe('basemode animalGuess()', function() {
  it('should alert Try Again when called with the argument panda', function() {

    animalGuess('panda');
    expect(alertSpy.calledOnce).to.be.true;

    var alertArgs = alertSpy.args[0][0]; // grab alert args
    expect(alertArgs).to.equal('Try again.');
  });

  it('should alert How did you know?! when called with the argument turtle', function() {
    animalGuess('turtle');
    expect(alertSpy.calledOnce).to.be.true;

    var alertArgs = alertSpy.args[0][0]; // grab alert args
    expect(alertArgs).to.equal('How did you know?!');
  });
});
