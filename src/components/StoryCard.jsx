import { Link } from 'react-router-dom'

function StoryCard({card}) {

  return (
      <div className={"story-card " + (card.darkMode ? 'story-card-dark' : 'story-card-light')}>
        <img
          className="story-card-img"
          srcset={`${card.imageMobile} 375w,
                   ${card.imageTablet} 273w,
                   ${card.imageDesktop} 830w`}
          sizes="(max-width: 600px) 400px,
                (max-width: 768px) 300px,
                800px"
          src={card.mobileImg}
          alt="create and share"
        />        
        <div className="story-card-content">
          <p className="story-card-content-intro">{card.intro}</p>
          <p className="story-card-content-text">{card.text}</p>
          <button className={"button button-no-border " + (card.darkMode ? 'button-no-border-light' : '')}>
            <Link to={card.buttonLink}>{card.buttonText}</Link>
          </button>
        </div>
      </div>
  )
}

export default StoryCard