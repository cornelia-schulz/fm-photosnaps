import FeatureCard from "./FeatureCard"

function Features({features}) {
return (
  <div className="features-wrapper">
    <h1 className="tablet-only large-only">COMPARE</h1>
    <div className="feature-headers">
      <h4 className="features-header">THE FEATURES</h4>
      <div className="version-headers">
        <h4 className="feature-header tablet-only large-only">BASIC</h4>
        <h4 className="feature-header tablet-only large-only">PRO</h4>
        <h4 className="feature-header tablet-only large-only">BUSINESS</h4>
      </div>
    </div>
    {features.map((feature, index) =>
      <FeatureCard featureCard={feature} key={index} />
    )}
  </div>
)
}

export default Features