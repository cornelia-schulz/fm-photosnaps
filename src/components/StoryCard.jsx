import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../hooks/useWindowSize'

function StoryCard({card, index}) {

  const windowSize = useWindowSize()
  const [showImage, setShowImage] = useState(false)
  const [image, setImage] = useState(card.imageMobile)

  useEffect(() => {
    if (windowSize.width < 768) {
      setShowImage(true)
      setImage(card.imageMobile)
    } else if (windowSize.width > 767 && windowSize.width < 1000) {
      setShowImage(index%2 !== 0)
      setImage(card.imageTablet)
    } else if (windowSize.width > 999) {
      setImage(card.imageDesktop)
      setShowImage(index%2 !== 0)
    }
  }, [windowSize, index, card.imageDesktop, card.imageMobile, card.imageTablet])

  

  return (
      <div className={"story-card " + (card.darkMode ? 'story-card-dark' : 'story-card-light')} role="contentinfo">
        {showImage &&
        <img
          className="story-card-img"
          src={image}
          alt={card.intro}
        />}
        <div className={"story-card-content " + (card.storiesPage ? 'absolute' : '')}>
          {card.tagline &&
            <p className="story-card-content-tagline">{card.tagline}</p>
          }
          <div className={"highlight " + (card.darkMode ? 'show' : 'hide')} />
          <p className="story-card-content-intro">{card.intro}</p>
          {card.date &&
            <p className="story-card-content-date-author">
              <span className="opacity-75">
                {card.date}
              </span>
              <span className="story-card-content-author">
                by {card.author}
              </span>
            </p>
          }
          <p className="story-card-content-text opacity-60">{card.text}</p>
          {card.buttonText &&
            <div className={"button button-no-border " + (card.darkMode ? 'button-no-border-light' : '')}>
              <Link to={card.buttonLink}>{card.buttonText}</Link>
            </div>
          }
        </div>
        {windowSize.width > 767 && !showImage &&
        <img
          className="story-card-img"
          src={image}
          alt={card.intro}
        />}
      </div>
  )
}

export default StoryCard