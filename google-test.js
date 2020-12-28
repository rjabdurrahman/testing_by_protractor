browser.ignoreSynchronization = true;
// browser.waitForAngularEnabled(false);

describe('Google Demo', function() {
  it('Should Search', function() {
    browser.driver.get('http://google.com/');   
    browser.driver.findElement(by.name('q')).sendKeys('please work');
  });
});