import { Link } from 'react-router-dom'
import  Logo from '../components/Logo'
import Facebook from '../components/Facebook'
import Youtube from '../components/Youtube'
import Twitter from '../components/Twitter'
import Pinterest from '../components/Pinterest'
import Instagram from '../components/Instagram'

function Footer() {
    return (
        <footer className="footer">
            <Logo fill="white" className="footer-logo" />
            {/* <img src={logo} alt="logo" /> */}
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
            <p className="copyright">Copyright 2019. All Rights Reserved</p>
        </footer>
    )
}

export default Footer