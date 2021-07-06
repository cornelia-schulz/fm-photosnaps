function InfoCard({infoCard}) {
    return (
        <div className="info-card">
            <img src={infoCard.image} alt="icon" />
            <h3>{infoCard.title}</h3>
            <p>{infoCard.text}</p>
        </div>
    )
}

export default InfoCard