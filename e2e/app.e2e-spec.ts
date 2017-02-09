import { StreamingPage } from './app.po';

describe('streaming App', function() {
  let page: StreamingPage;

  beforeEach(() => {
    page = new StreamingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
