import check from '../assets/pricing/desktop/check.svg'

function FeatureCard({featureCard}) {
    return (
        <div className="feature-card">
            <h4 className="feature-name">{featureCard.name}</h4>
            <div className="version-wrapper">
                <div className="version">
                    <p className="mobile-only">BASIC</p>
                    {featureCard.basic &&
                        <div><img src={check} alt="tick" /></div>
                    }
                </div>
                <div className="version">
                <p className="mobile-only">PRO</p>
                    {featureCard.pro &&
                        <div><img src={check} alt="tick" /></div>
                    }
                </div>
                <div className="version">
                <p className="mobile-only">BUSINESS</p>
                    {featureCard.business &&
                        <div><img src={check} alt="tick" /></div>
                    }
                </div>
            </div>
        </div>
    )
}
export default FeatureCard