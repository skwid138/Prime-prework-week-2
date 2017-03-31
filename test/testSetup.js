var logSpy;
var alertSpy;

beforeEach(function() {
  logSpy = sinon.spy(window.console, "log");
  alertSpy = sinon.spy(window, "alert");
});

afterEach(function() {
  logSpy.restore();
  alertSpy.restore();
});