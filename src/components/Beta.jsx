import betaMobile from '../assets/shared/mobile/bg-beta.jpg'
import betaTablet from '../assets/shared/tablet/bg-beta.jpg'
import betaDesktop from '../assets/shared/desktop/bg-beta.jpg'

function Beta() {
    return (
        <div className="beta">
            <img
                className="beta-img"
                srcSet={`${betaMobile} 375w,
                         ${betaTablet} 768w,
                         ${betaDesktop} 1440w`}
                sizes="(max-width 600px) 375px,
                        (max-width 768px) 768px,
                        1440px"
                src={betaMobile}
                alt="we are in beta"
                loading="lazy"
            />
            <div className="highlight-beta" />
            <div className="beta-content">
                <p className="beta-tagline">WE'RE IN BETA. GET YOUR INVITE TODAY!</p>
                <button className="button button-no-border button-no-border-light">
                    GET AN INVITE
                </button>
            </div>
        </div>
    )
}

export default Beta