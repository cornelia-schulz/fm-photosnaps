import { useState } from 'react'
import Header from '../components/Header'
import StoryCard from '../components/StoryCard'
import createMobileImg from '../assets/home/mobile/create-and-share.jpg'
import createTabletImg from '../assets/home/tablet/create-and-share.jpg'
import createDesktopImg from '../assets/home/desktop/create-and-share.jpg'
import beautifulMobileImg from '../assets/home/mobile/beautiful-stories.jpg'
import beautifulTabletImg from '../assets/home/tablet/beautiful-stories.jpg'
import beautifulDesktopImg from '../assets/home/desktop/beautiful-stories.jpg'
import designedMobileImg from '../assets/home/mobile/designed-for-everyone.jpg'
import designedTabletImg from '../assets/home/tablet/designed-for-everyone.jpg'
import designedDesktopImg from '../assets/home/desktop/designed-for-everyone.jpg'

function Home() {

  const[cards] = useState([
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


    return (
      <div className="home">
        <Header />
        {cards.map((card) => 
          <StoryCard card={card} />
        )}
      </div>
    );
  }
  
  export default Home