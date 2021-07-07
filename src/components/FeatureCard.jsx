import check from '../assets/pricing/desktop/check.svg'

function FeatureCard({featureCard}) {
    return (
        <div className="feature-card">
            <h4>{featureCard.name}</h4>
            <div className="version-wrapper">
                <div className="version">
                    <p>BASIC</p>
                    {featureCard.basic &&
                        <img src={check} alt="tick" />
                    }
                </div>
                <div className="version">
                <p>PRO</p>
                    {featureCard.pro &&
                        <img src={check} alt="tick" />
                    }
                </div>
                <div className="version">
                <p>BUSINESS</p>
                    {featureCard.business &&
                        <img src={check} alt="tick" />
                    }
                </div>
            </div>
        </div>
    )
}
export default FeatureCard