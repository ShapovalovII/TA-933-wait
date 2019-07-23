const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {

    browser.url('https://trueautomation.io');
    browser.waitUntil(() => {
      return $(ta("testName"))
    }, 20000, 'expected element to be different after 20s');
  });
});
