import { Angular2048Page } from './app.po';

describe('angular2048 App', function() {
  let page: Angular2048Page;

  beforeEach(() => {
    page = new Angular2048Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
