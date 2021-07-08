import { useEffect, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import betaMobile from '../assets/shared/mobile/bg-beta.jpg'
import betaTablet from '../assets/shared/tablet/bg-beta.jpg'
import betaDesktop from '../assets/shared/desktop/bg-beta.jpg'

function Beta() {
  const windowSize = useWindowSize()
  const [image, setImage] = useState(betaMobile)

  useEffect(() => {
    if (windowSize.width < 768) {
      setImage(betaMobile)
    } else if (windowSize.width > 767 && windowSize.width < 1000) {
      setImage(betaTablet)
    } else if (windowSize.width > 999) {
      setImage(betaDesktop)
    }
  }, [windowSize, ])

  return (
    <div className="beta">
      <img
        className="beta-img"
        src={image}
        alt="we are in beta"
        loading="lazy"
      />
      <div className="highlight-beta" />
      <div className="beta-content">
        <p className="beta-tagline">WE'RE IN BETA. GET YOUR INVITE TODAY!</p>
        <button className="button button-no-border button-no-border-light">
          GET AN INVITE
        </button>
      </div>
    </div>
    )
}

export default Beta