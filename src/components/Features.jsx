import FeatureCard from "./FeatureCard"

function Features({features}) {
return (
  <div className="features-wrapper">
    <h4 className="features-header">THE FEATURES</h4>
    {features.map((feature, index) =>
      <FeatureCard featureCard={feature} key={index} />
    )}
  </div>
)
}

export default Features