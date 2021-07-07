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
      price: "$19.00",
      time: "per month",
      darkMode: false
    },
    {
      title: "Pro",
      text: "More advanced features available. Recommended for photography veterans and professionals.",
      price: "$39.00",
      time: "per month",
      darkMode: true
    },
    {
      title: "Business",
      text: "Additional features available such as more detailed metrics. Recommended for business owners.",
      price: "$99.00",
      time: "per month",
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
        <StoryCard card={storyCard} key={index} />
      )}
      {priceCards.map((priceCard, index) =>
        <PriceCard priceCard={priceCard} key={index} />
      )}
      <Features features={features} />
      <Beta />
      <Footer />
    </div>
  );
}
  
  export default Pricing;