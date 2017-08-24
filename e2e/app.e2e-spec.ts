import { BasicbindingPage } from './app.po';

describe('basicbinding App', () => {
  let page: BasicbindingPage;

  beforeEach(() => {
    page = new BasicbindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
