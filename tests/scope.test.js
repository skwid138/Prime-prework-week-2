describe('promode thePizzeria()', function() {
  it('should log the correct answers based on scope', function() {

    thePizzeria();

    var logArgs = logSpy.args; // grab alert args
    alert(logArgs);
    expect(logArgs[0][0]).to.equal(7);
    expect(logArgs[1][0]).to.equal(8);
  });
});
