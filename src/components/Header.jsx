import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'

function Header() {
  return (
    <div className="header">
      <header className="mobile-header">
        <img src={logo} alt="Logo" />
        <img src={menu} alt="Menu toggle" />
      </header>
    </div>
  );
}

export default Header;