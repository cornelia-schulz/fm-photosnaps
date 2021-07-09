import { Link } from 'react-router-dom'
import  Logo from './svg/Logo'
import Facebook from './svg/Facebook'
import Youtube from './svg/Youtube'
import Twitter from './svg/Twitter'
import Pinterest from './svg/Pinterest'
import Instagram from './svg/Instagram'
import { Fragment } from 'react'

function Footer() {
    return (
        <Fragment>
          <footer className="footer footer-mobile">
            <Logo fill="white" className="footer-logo" />
            <div className="social-media-icons-wrapper">
                <Link to=""><Facebook fill="white" /></Link>
                <Link to=""><Youtube fill="white" /></Link>
                <Link to=""><Twitter fill="white" /></Link>
                <Link to=""><Pinterest fill="white" /></Link>
                <Link to=""><Instagram fill="white" /></Link>
            </div>
            <ul className="site-links-list">
                <li className="site-links"><Link to="/">HOME</Link></li>
                <li className="site-links"><Link to="/stories">STORIES</Link></li>
                <li className="site-links"><Link to="/features">FEATURES</Link></li>
                <li className="site-links"><Link to="/pricing">PRICING</Link></li>
            </ul>
            <button className="button button-no-border button-no-border-light">GET AN INVITE</button>
            <p className="copyright opacity-50">Copyright 2019. All Rights Reserved</p>
          </footer>
          
          <footer className="footer footer-large">
            <div className="logo-wrapper">
              <div className="logo-site-links-wrapper">
                <Logo fill="white" className="footer-logo" />
                <ul className="site-links-list-large">
                  <li className="site-links"><Link to="/">HOME</Link></li>
                  <li className="site-links"><Link to="/stories">STORIES</Link></li>
                  <li className="site-links"><Link to="/features">FEATURES</Link></li>
                  <li className="site-links"><Link to="/pricing">PRICING</Link></li>
                </ul>
              </div>
              <button className="button button-no-border button-no-border-light">GET AN INVITE</button>
            </div>
              <ul className="site-links-list">
                <li className="site-links"><Link to="/">HOME</Link></li>
                <li className="site-links"><Link to="/stories">STORIES</Link></li>
                <li className="site-links"><Link to="/features">FEATURES</Link></li>
                <li className="site-links"><Link to="/pricing">PRICING</Link></li>
            </ul>
              
            <div className="copyright-wrapper">
                <div className="social-media-icons-wrapper">
                    <Link to=""><Facebook fill="white" /></Link>
                    <Link to=""><Youtube fill="white" /></Link>
                    <Link to=""><Twitter fill="white" /></Link>
                    <Link to=""><Pinterest fill="white" /></Link>
                    <Link to=""><Instagram fill="white" /></Link>
                </div>
                <p className="copyright opacity-50">Copyright 2019. All Rights Reserved</p>
            </div>
          </footer>
        </Fragment>
    )
}

export default Footer