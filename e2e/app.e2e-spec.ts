import { AdventureWorksAppPage } from './app.po';

describe('adventure-works-app App', () => {
  let page: AdventureWorksAppPage;

  beforeEach(() => {
    page = new AdventureWorksAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to yo!!'))
      .then(done, done.fail);
  });
});
