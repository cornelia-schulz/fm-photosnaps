import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StoryCard from '../components/StoryCard'
import InfoCard from '../components/InfoCard'
import Beta from '../components/Beta'
import heroMobileImg from '../assets/features/mobile/hero.jpg'
import heroTabletImg from '../assets/features/tablet/hero.jpg'
import responsive from '../assets/features/desktop/responsive.svg'
import noLimit from '../assets/features/desktop/no-limit.svg'
import embed from '../assets/features/desktop/embed.svg'
import custom from '../assets/features/desktop/custom-domain.svg'
import boost from '../assets/features/desktop/boost-exposure.svg'
import drag from '../assets/features/desktop/drag-drop.svg'

function Features() {
  const [storyCards] = useState([
    {
      intro: "FEATURES",
      text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
      imageMobile: heroMobileImg,
      imageTablet: heroTabletImg,
      imageDesktop: heroMobileImg,
      darkMode: true
    }
  ])

  const [infoCards] = useState([
    {
      image: responsive,
      title: "100% Responsive",
      text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
    },
    {
      image: noLimit,
      title: "No Photo Upload Limit",
      text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
    },
    {
      image: embed,
      title: "Available to Embed",
      text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
    },
    {
      image: custom,
      title: "Custom Domain",
      text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
    },
    {
      image: boost,
      title: "Boost Your Exposure",
      text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
    },
    {
      image: drag,
      title: "Drag & Drop Image",
      text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
    }
  ])

  return (
    <div className="features">
      <Header />
      {storyCards.map((storyCard, index) =>
        <StoryCard card={storyCard} key={index} />
      )}
      {infoCards.map((infoCard, index) =>
        <InfoCard infoCard={infoCard} key={index} />
      )}
      <Beta />
      <Footer />
    </div>
  );
}
  
  export default Features;