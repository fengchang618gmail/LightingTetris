import { LightingTetrisPage } from './app.po';

describe('lighting-tetris App', () => {
  let page: LightingTetrisPage;

  beforeEach(() => {
    page = new LightingTetrisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
