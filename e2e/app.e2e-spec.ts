import { DoeyPage } from './app.po';

describe('doey App', function() {
  let page: DoeyPage;

  beforeEach(() => {
    page = new DoeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
