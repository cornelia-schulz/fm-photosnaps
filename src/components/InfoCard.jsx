function InfoCard({infoCard}) {
    return (
        <div className="info-card">
            <div className="info-card-img">
              <img src={infoCard.image} alt="icon" />
            </div>
            <h3>{infoCard.title}</h3>
            <p>{infoCard.text}</p>
        </div>
    )
}

export default InfoCard