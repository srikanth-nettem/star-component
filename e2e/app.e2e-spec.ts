import { StarComponentPage } from './app.po';

describe('star-component App', function() {
  let page: StarComponentPage;

  beforeEach(() => {
    page = new StarComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
