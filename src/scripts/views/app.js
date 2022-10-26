import DrawerInitiator from '../utils/drawer-initiator';
import FormBarInitiator from '../utils/form-bar-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ DrawerComponent, FormSearchComponent }) {
    this._button = DrawerComponent.button;
    this._drawer = DrawerComponent.drawer;
    this._navbarContainer = DrawerComponent.navbarContainer;
    this._content = DrawerComponent.content;

    this._openFormBtn = FormSearchComponent.openFormBtn;
    this._form = FormSearchComponent.form;
    this._closeFormBtn = FormSearchComponent.closeFormBtn;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      navbarContainer: this._navbarContainer,
      content: this._content,
    });

    FormBarInitiator.init({
      openFormBtn: this._openFormBtn,
      form: this._form,
      closeFormBtn: this._closeFormBtn,
      mainContent: this._content,
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
