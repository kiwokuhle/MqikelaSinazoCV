import { MqikelaSinazoCVPage } from './app.po';

describe('mqikela-sinazo-cv App', function() {
  let page: MqikelaSinazoCVPage;

  beforeEach(() => {
    page = new MqikelaSinazoCVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
