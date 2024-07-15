import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <a href="#" className="nav__logo">
          <img src="/src/pictures/icons/white-logo.svg" alt="NAMU-logo" />
        </a>
        <div className="nav__icons icons">
          <a href="#menu" className="icons__menu">
            <img src="/src/pictures/icons/menu.svg" alt="menu" />
          </a>
          <div className="icons__lang">
          <span>UA</span>
          <img src="/src/pictures/icons/arrow.svg"></img>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
