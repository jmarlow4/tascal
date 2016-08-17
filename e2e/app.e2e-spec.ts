import { TascalPage } from './app.po';

describe('tascal App', function() {
  let page: TascalPage;

  beforeEach(() => {
    page = new TascalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
