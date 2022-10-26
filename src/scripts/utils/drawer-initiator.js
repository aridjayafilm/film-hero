const DrawerInitiator = {
  init({ button, drawer, navbarContainer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer, navbarContainer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer, navbarContainer);
    });
  },

  _toggleDrawer(event, button, drawer, navbarContainer) {
    event.stopPropagation();
    button.classList.toggle('navOpen');
    drawer.classList.toggle('navOpen');
    navbarContainer.classList.toggle('navOpen');
  },

  _closeDrawer(event, button, drawer, navbarContainer) {
    event.stopPropagation();
    button.classList.remove('navOpen');
    drawer.classList.remove('navOpen');
    navbarContainer.classList.remove('navOpen');
  },
};

export default DrawerInitiator;
