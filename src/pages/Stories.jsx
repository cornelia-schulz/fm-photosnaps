import { useState } from 'react'
import Header from '../components/Header'
import StoryCard from '../components/StoryCard'
import PhotoCard from '../components/PhotoCard'
import Footer from '../components/Footer'
import hazyMobileImg from '../assets/stories/mobile/moon-of-appalacia.jpg'
import hazyTabletImg from '../assets/stories/tablet/moon-of-appalacia.jpg'
import hazyDesktopImg from '../assets/stories/desktop/moon-of-appalacia.jpg'
import mountainsMobileImg from '../assets/stories/mobile/mountains.jpg'
import mountainsDesktopImg from '../assets/stories/desktop/mountains.jpg'
import cityscapesMobileImg from '../assets/stories/mobile/cityscapes.jpg'
import cityscapesDesktopImg from '../assets/stories/desktop/cityscapes.jpg'
import voyageMobileImg from '../assets/stories/mobile/18-days-voyage.jpg'
import voyageDesktopImg from '../assets/stories/desktop/18-days-voyage.jpg'
import architecturalsMobileImg from '../assets/stories/mobile/architecturals.jpg'
import architecturalsDesktopImg from '../assets/stories/desktop/architecturals.jpg'
import worldTourMobileImg from '../assets/stories/mobile/world-tour.jpg'
import worldTourDesktopImg from '../assets/stories/desktop/world-tour.jpg'
import unforeseenMobileImg from '../assets/stories/mobile/unforeseen-corners.jpg'
import unforeseenDesktopImg from '../assets/stories/desktop/unforeseen-corners.jpg'
import kingMobileImg from '../assets/stories/mobile/king-on-africa.jpg'
import kingDesktopImg from '../assets/stories/desktop/king-on-africa.jpg'
import tripMobileImg from '../assets/stories/mobile/trip-to-nowhere.jpg'
import tripDesktopImg from '../assets/stories/desktop/trip-to-nowhere.jpg'
import rageMobileImg from '../assets/stories/mobile/rage-of-the-sea.jpg'
import rageDesktopImg from '../assets/stories/desktop/rage-of-the-sea.jpg'
import runningMobileImg from '../assets/stories/mobile/running-free.jpg'
import runningDesktopImg from '../assets/stories/desktop/running-free.jpg'
import waveMobileImg from '../assets/stories/mobile/behind-the-waves.jpg'
import waveDesktopImg from '../assets/stories/desktop/behind-the-waves.jpg'
import calmMobileImg from '../assets/stories/mobile/calm-waters.jpg'
import calmDesktopImg from '../assets/stories/desktop/calm-waters.jpg'
import milkywayMobileImg from '../assets/stories/mobile/milky-way.jpg'
import milkywayDesktopImg from '../assets/stories/desktop/milky-way.jpg'
import darkMobileImg from '../assets/stories/mobile/dark-forest.jpg'
import darkDesktopImg from '../assets/stories/desktop/dark-forest.jpg'
import somwarpetMobileImg from '../assets/stories/mobile/somwarpet.jpg'
import somwarpetDesktopImg from '../assets/stories/desktop/somwarpet.jpg'
import dreamsMobileImg from '../assets/stories/mobile/land-of-dreams.jpg'
import dreamsDesktopImg from '../assets/stories/desktop/land-of-dreams.jpg'

function Stories() {
  const [storyCards] = useState([
    {
      tagline: "LAST MONTH'S FEATURED STORY",
      intro: "HAZY FULL MOON OF APPALACHIA",
      text: "The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
      imageMobile: hazyMobileImg,
      imageTablet: hazyTabletImg,
      imageDesktop: hazyDesktopImg,
      buttonText: "READ THE STORY",
      buttonLink: "/stories",
      darkMode: true,
      date: "March 2nd 2020",
      author: "John Appleseed",
      storiesPage: true
    }
  ])

  const [photoCards] = useState([
    {
      mobileImage: mountainsMobileImg,
      desktopImage: mountainsDesktopImg,
      title: "The Mountains",
      author: "John Appleseed",
      date: "April 16th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: cityscapesMobileImg,
      desktopImage: cityscapesDesktopImg,
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      date: "April 14th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: voyageMobileImg,
      desktopImage: voyageDesktopImg,
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      date: "April 11th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: architecturalsMobileImg,
      desktopImage: architecturalsDesktopImg,
      title: "Architecturals",
      author: "Samantha Brooks",
      date: "April 9th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: worldTourMobileImg,
      desktopImage: worldTourDesktopImg,
      title: "World Tour 2019",
      author: "Timothy Wagner",
      buttonLink: "/stories",
      date: "April 7th 2020",
      buttonText: "READ STORY"
    },
    {
      mobileImage: unforeseenMobileImg,
      desktopImage: unforeseenDesktopImg,
      title: "Unforeseen Corners",
      author: "William Malcolm",
      date: "April 3rd 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: kingMobileImg,
      desktopImage: kingDesktopImg,
      title: "King on Africa: Part II",
      author: "Tim Hillerburg",
      date: "March 29th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: tripMobileImg,
      desktopImage: tripDesktopImg,
      title: "The Trip to Nowhere",
      author: "Felicia Rourke",
      date: "March 21st 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: rageMobileImg,
      desktopImage: rageDesktopImg,
      title: "Rage of the Sea",
      author: "Mohammed Abdul",
      date: "March 19th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: runningMobileImg,
      desktopImage: runningDesktopImg,
      title: "Running Free",
      author: "Michelle",
      date: "March 16th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: waveMobileImg,
      desktopImage: waveDesktopImg,
      title: "Behind the Waves",
      author: "Lamarr Wilson",
      date: "March 11th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: calmMobileImg,
      desktopImage: calmDesktopImg,
      title: "Calm Waters",
      author: "Samantha Brocke",
      date: "March 9th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: milkywayMobileImg,
      desktopImage: milkywayDesktopImg,
      title: "The Milky Way",
      author: "Benjamin Cruz",
      date: "March 5th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: darkMobileImg,
      desktopImage: darkDesktopImg,
      title: "Night at The Dark Forest",
      author: "Mohammed Abdul",
      date: "March 4th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: somwarpetMobileImg,
      desktopImage: somwarpetDesktopImg,
      title: "Somwarpet's Beauty",
      author: "Michelle",
      date: "March 1st 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    },
    {
      mobileImage: dreamsMobileImg,
      desktopImage: dreamsDesktopImg,
      title: "Land of Dreams",
      author: "William Malcolm",
      date: "February 25th 2020",
      buttonLink: "/stories",
      buttonText: "READ STORY"
    }
  ])

    return (
      <div className="stories">
        <Header />
        <main>
          {storyCards.map((storyCard, index) => 
            <StoryCard card={storyCard} index={index + 1} key={index} />
          )}
          <div className="photo-cards">
            {photoCards.map((photoCard, index) => 
              <PhotoCard photoCard={photoCard} key={index} />
            )}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
  
  export default Stories