describe('basemode animalGuess()', function() {
  it('should alert Try Again when called with the argument panda', function() {

    animalGuess('panda');
    expect(alertSpy.calledOnce).to.be.true;

    var alertArgs = alertSpy.args[0][0]; // grab alert args
    expect(alertArgs.toLowerCase()).to.contain('try again');
    expect(alertArgs.toLowerCase()).to.not.contain('How did you know');
  });

  it('should alert How did you know?! when called with the argument turtle', function() {
    animalGuess('turtle');
    expect(alertSpy.calledOnce).to.be.true;

    var alertArgs = alertSpy.args[0][0]; // grab alert args
    expect(alertArgs.toLowerCase()).to.contain('how did you know');
    expect(alertArgs.toLowerCase()).to.not.contain('try again');
  });
});
