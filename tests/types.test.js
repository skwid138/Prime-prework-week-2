describe('basemode theDoubler()', function() {
  it('should log the correct answers based on type', function() {

    var testArray = [4,"Hey", true, {}, undefined, false];

    testArray.forEach(function(thing){
        theDoubler(thing);
    });

    var logArgs = logSpy.args; // grab alert args
    expect(logArgs[0][0]).to.equal(8);
    expect(logArgs[1][0]).to.equal('HeyHey');
    expect(logArgs[2][0]).to.equal("Super-duper true");
    expect(logArgs[3][0]).to.equal('everything is an object');
    expect(logArgs[4][0]).to.equal("I can't double this");
    expect(logArgs[5][0]).to.equal("I won't double this");
  });
});
