function PriceCard({priceCard}) {
    return (
        <div className={"price-card " + (priceCard.darkMode ? 'price-card-dark' : '')}>
            {priceCard.darkMode &&
                <div className="price-card-highlight" />
            }
            <h2>{priceCard.title}</h2>
            <p  className="opacity-60">{priceCard.text}</p>
            <p className="pricetag">{priceCard.price}</p>
            <p className="opacity-60">{priceCard.time}</p>
            <button className={"button " + (priceCard.darkMode ? '' : 'button-dark')}>PICK PLAN</button>
        </div>
    )
}

export default PriceCard