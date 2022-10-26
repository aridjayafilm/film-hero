import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const DrawerComponent = {
  button: document.querySelector('.navbar-hamburger-btn'),
  drawer: document.querySelector('nav'),
  navbarContainer: document.querySelector('.navbar-container'),
  content: document.querySelector('#main'),
}

const FormSearchComponent = {
  openFormBtn: document.querySelector('.navbar-search-button'),
  form: document.querySelector('.navbar-form'),
  closeFormBtn: document.querySelector('.navbar-form-close'),
}

const app = new App({
  DrawerComponent: DrawerComponent,
  FormSearchComponent: FormSearchComponent
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  // swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
