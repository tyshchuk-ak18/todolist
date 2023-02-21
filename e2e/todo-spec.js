describe('angularjs homepage todo list', function() {
  it('should check title of page', function() {
    browser.get('https://localhost:4200');
    
    browser.driver.getTitle().then(function(pageTitle) {
      expect(pageTitle).toEqual('Example Domain');
    });
  });
});
