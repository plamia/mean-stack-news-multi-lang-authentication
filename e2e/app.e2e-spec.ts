import { AppPage } from './app.po';

describe('world-news-website', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display world-news-website', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to world news website!');
  });
});
