import { useState } from 'react'
import Header from '../components/Header'
import StoryCard from '../components/StoryCard'
import PhotoCard from '../components/PhotoCard'
import InfoCard from '../components/InfoCard'
import Footer from '../components/Footer'
import createMobileImg from '../assets/home/mobile/create-and-share.jpg'
import createTabletImg from '../assets/home/tablet/create-and-share.jpg'
import createDesktopImg from '../assets/home/desktop/create-and-share.jpg'
import beautifulMobileImg from '../assets/home/mobile/beautiful-stories.jpg'
import beautifulTabletImg from '../assets/home/tablet/beautiful-stories.jpg'
import beautifulDesktopImg from '../assets/home/desktop/beautiful-stories.jpg'
import designedMobileImg from '../assets/home/mobile/designed-for-everyone.jpg'
import designedTabletImg from '../assets/home/tablet/designed-for-everyone.jpg'
import designedDesktopImg from '../assets/home/desktop/designed-for-everyone.jpg'
import mountainsMobileImg from '../assets/stories/mobile/mountains.jpg'
import mountainsDesktopImg from '../assets/stories/desktop/mountains.jpg'
import cityscapesMobileImg from '../assets/stories/mobile/cityscapes.jpg'
import cityscapesDesktopImg from '../assets/stories/desktop/cityscapes.jpg'
import voyageMobileImg from '../assets/stories/mobile/18-days-voyage.jpg'
import voyageDesktopImg from '../assets/stories/desktop/18-days-voyage.jpg'
import architecturalsMobileImg from '../assets/stories/mobile/architecturals.jpg'
import architecturalsDesktopImg from '../assets/stories/desktop/architecturals.jpg'
import responsive from '../assets/features/desktop/responsive.svg'
import noLimit from '../assets/features/desktop/no-limit.svg'
import embed from '../assets/features/desktop/embed.svg'

function Home() {

  const[storyCards] = useState([
    {
      intro: "CREATE AND SHARE YOUR PHOTO STORIES",
      text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      imageMobile: createMobileImg,
      imageTablet: createTabletImg,
      imageDesktop: createDesktopImg,
      buttonText: "GET AN INVITE",
      buttonLink: "/stories",
      darkMode: true
    },
    {
      intro: "BEAUTIFUL STORIES EVERY TIME",
      text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      imageMobile: beautifulMobileImg,
      imageTablet: beautifulTabletImg,
      imageDesktop: beautifulDesktopImg,
      buttonLink: "/stories",
      buttonText: "VIEW THE STORIES",
      darkMode: false
    },
    {
      intro: "DESIGNED FOR EVERYONE",
      text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
      imageMobile: designedMobileImg,
      imageTablet: designedTabletImg,
      imageDesktop: designedDesktopImg,
      buttonLink: "/stories",
      buttonText: "VIEW THE STORIES",
      darkMode: false
    }
  ])
  const [photoCards] = useState([
    {
      mobileImage: mountainsMobileImg,
      desktopImage: mountainsDesktopImg,
      title: "The Mountains",
      author: "John Appleseed",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: cityscapesMobileImg,
      desktopImage: cityscapesDesktopImg,
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: voyageMobileImg,
      desktopImage: voyageDesktopImg,
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: architecturalsMobileImg,
      desktopImage: architecturalsDesktopImg,
      title: "Architecturals",
      author: "Samantha Brooks",
      buttonLink: "/stories",
      buttonText: "READ STORY"
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
    }
  ])


    return (
      <div className="home">
        <Header />
        {storyCards.map((storyCard) => 
          <StoryCard card={storyCard} />
        )}
        {photoCards.map((photoCard) => 
          <PhotoCard photoCard={photoCard} />
        )}
        {infoCards.map((infoCard) => 
          <InfoCard infoCard={infoCard} />
        )}
        <Footer />
      </div>
    );
  }
  
  export default Home