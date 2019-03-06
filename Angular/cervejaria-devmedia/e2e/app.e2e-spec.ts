import { CervejariaDevmediaPage } from './app.po';

describe('cervejaria-devmedia App', function() {
  let page: CervejariaDevmediaPage;

  beforeEach(() => {
    page = new CervejariaDevmediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
