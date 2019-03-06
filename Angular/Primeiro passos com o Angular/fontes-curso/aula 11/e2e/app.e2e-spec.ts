import { LojaDevmediaPage } from './app.po';

describe('loja-devmedia App', function() {
  let page: LojaDevmediaPage;

  beforeEach(() => {
    page = new LojaDevmediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
