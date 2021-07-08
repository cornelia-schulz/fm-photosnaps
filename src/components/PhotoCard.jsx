import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../hooks/useWindowSize'

function PhotoCard({ photoCard }) {
  const windowSize = useWindowSize()
  const [image, setImage] = useState(photoCard.mobileImage)

  useEffect(() => {
    if (windowSize.width < 768) {
      setImage(photoCard.mobileImage)
    } else {
      setImage(photoCard.desktopImage)
    }
  }, [windowSize, photoCard.desktopImage, photoCard.mobileImage])

  return (
    <div className="photo-card">
      <img
        className="photo-card-img"
        src={image}
        alt="story"
        loading="lazy"
      />
      <div className="gradient" />
      <div className="photo-card-description">
        {photoCard.date && <p className="photo-card-date"> {photoCard.date}</p>}
        <h3 className="photo-card-title">{photoCard.title}</h3>
        <p className="photo-card-author">by {photoCard.author}</p>
        <button className="button button-no-border button-no-border-light">
          <Link to={photoCard.buttonLink}>{photoCard.buttonText}</Link>
        </button>
      </div>
    </div>
  )
}

export default PhotoCard
