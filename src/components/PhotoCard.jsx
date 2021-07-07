import { Link } from 'react-router-dom'

function PhotoCard({photoCard}) {
    return (
        <div className="photo-card">
            <img 
                className="photo-card-img"
                srcSet={`${photoCard.mobileImage} 375w,
                         ${photoCard.desktopImage} 360w`}
                sizes="(max-width 768px) 375px,
                        360px"
                src={photoCard.mobileImage}
                alt="story"
                loading="lazy"
            />
            <div className="gradient" />
            <div className="photo-card-description">
                {photoCard.date && 
                    <p className="photo-card-date"> {photoCard.date}</p>
                }
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