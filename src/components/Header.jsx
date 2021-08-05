import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'

function Header() {
  const [menuImg, setMenuImg] = useState(menu)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      setMenuImg(close)
    } else {
      setMenuImg(menu)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    isMenuOpen? setIsMenuOpen(false) : setIsMenuOpen(true)
    console.log('menu toggled')
  }


  return (
    <header className="header">
      <nav className="mobile-header" role="navigation">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        <label className="menu-toggle" htmlFor="menu-toggle">
          <img className="toggle" src={menuImg} alt="Menu toggle" />
        </label>
        <input type="checkbox" id="menu-toggle" onClick={toggleMenu}/>
        <ul id="menu">
          <li className="menu-items">
            <Link className="menu-link" to="/stories">STORIES</Link>
          </li>
          <li className="menu-items">
            <Link className="menu-link" to="/features">FEATURES</Link>
          </li>
          <li className="menu-items">
            <Link className="menu-link" to="/pricing">PRICING</Link>
          </li>
          <li className="menu-button">
            <button className="button button-dark">GET AN INVITE</button>
          </li>
        </ul>
      </nav>
      <nav className="large-header" role="navigation">
        <ul className="large-menu">
          <li>
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
          </li>
          <li className="sub-menu">
            <ul className="large-menu-items-wrapper">
              <li className="large-menu-items">
                <Link className="menu-link" to="/stories">STORIES</Link>
              </li>
              <li className="large-menu-items">
                <Link className="menu-link" to="/features">FEATURES</Link>
              </li>
              <li className="large-menu-items">
                <Link className="menu-link" to="/pricing">PRICING</Link>
              </li>
            </ul>
          </li>
          <li className="tablet-menu-items">
            <Link className="menu-link" to="/stories">STORIES</Link>
          </li>
          <li className="tablet-menu-items">
            <Link className="menu-link" to="/features">FEATURES</Link>
          </li>
          <li className="tablet-menu-items">
            <Link className="menu-link" to="/pricing">PRICING</Link>
          </li>
          <li className="menu-button">
            <button className="button button-dark">GET AN INVITE</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header