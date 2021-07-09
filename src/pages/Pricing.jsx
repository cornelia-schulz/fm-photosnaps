import { useState } from 'react'
import Header from '../components/Header'
import StoryCard from '../components/StoryCard'
import PriceCard from '../components/PriceCard'
import Features from '../components/Features'
import Beta from '../components/Beta'
import Footer from '../components/Footer'
import heroMobileImg from '../assets/pricing/mobile/hero.jpg'
import heroTabletImg from '../assets/pricing/tablet/hero.jpg'
import heroDesktopImg from '../assets/pricing/desktop/hero.jpg'

function Pricing() {
  const [showYearly, setShowYearly] = useState(false)

  const switchToggle = (e) => {
    setShowYearly(e.target.checked)
  }

  const [storyCards] = useState([
    {
      intro: "PRICING",
      text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
      imageMobile: heroMobileImg,
      imageTablet: heroTabletImg,
      imageDesktop: heroDesktopImg,
      darkMode: true
    }
  ])

  const [priceCards] = useState([
    {
      title: "Basic",
      text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      monthlyPrice: "$19.00",
      yearlyPrice: "$190.00",
      monthly: "per month",
      yearly: "per year",
      darkMode: false
    },
    {
      title: "Pro",
      text: "More advanced features available. Recommended for photography veterans and professionals.",
      monthlyPrice: "$39.00",
      yearlyPrice: "$390.00",
      monthly: "per month",
      yearly: "per year",
      darkMode: true
    },
    {
      title: "Business",
      text: "Additional features available such as more detailed metrics. Recommended for business owners.",
      monthlyPrice: "$99.00",
      yearlyPrice: "$990.00",
      monthly: "per month",
      yearly: "per year",
      darkMode: false
    }
  ])

  const [features] = useState([
    {
      name: "UNLIMITED STORY POSTING",
      basic: true,
      pro: true,
      business: true
    },
    {
      name: "UNLIMITED PHOTO UPLOAD",
      basic: true,
      pro: true,
      business: true
    },
    {
      name: "EMBEDDING CUSTOM CONTENT",
      basic: false,
      pro: true,
      business: true
    },
    {
      name: "CUSTOMIZE METADATA",
      basic: false,
      pro: true,
      business: true
    },
    {
      name: "ADVANCED METRICS",
      basic: false,
      pro: false,
      business: true
    },
    {
      name: "PHOTO DOWNLOADS",
      basic: false,
      pro: false,
      business: true
    },
    {
      name: "SEARCH ENGINE INDEXING",
      basic: false,
      pro: false,
      business: true
    },
    {
      name: "CUSTOM ANALYTICS",
      basic: false,
      pro: false,
      business: true
    }
  ])

  return (
    <div className="pricing">
      <Header />
      {storyCards.map((storyCard, index) =>
        <StoryCard card={storyCard} index={index} key={index} />
      )}
      <div className="price-toggle-wrapper">
      <p className={"price-toggle-text " + (showYearly ? 'font-normal' : 'font-bold')}>Monthly</p>
        <label className="price-toggle">
          <input className="price-toggle-input" type="checkbox" onChange={switchToggle} />
          <span className="slider round" />
        </label>
        <p className={"price-toggle-text " + (showYearly ? 'font-bold' : 'font-normal')}>Yearly</p>
      </div>
      <div className="price-cards">
        {priceCards.map((priceCard, index) =>
          <PriceCard priceCard={priceCard} key={index} showYearly={showYearly} />
        )}
      </div>
      <Features features={features} />
      <Beta />
      <Footer />
    </div>
  );
}
  
  export default Pricing;