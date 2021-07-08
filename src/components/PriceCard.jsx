import { useEffect, useState } from 'react'

function PriceCard({priceCard, showYearly}) {
    const [time, setTime] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        if (showYearly === false) {
            setTime(priceCard.monthly)
            setPrice(priceCard.monthlyPrice)
        } else {
            setTime(priceCard.yearly)
            setPrice(priceCard.yearlyPrice)
        }
    }, [showYearly, priceCard.monthly, priceCard.monthlyPrice, priceCard.yearly, priceCard.yearlyPrice])

    return (
      <div className={"price-card " + (priceCard.darkMode ? 'price-card-dark' : '')}>
        {priceCard.darkMode &&
          <div className="price-card-highlight" />
        }
        <div className="price-card-content">
          <h2>{priceCard.title}</h2>
          <p  className="opacity-60">{priceCard.text}</p>
          <div className="price-card-price-wrapper mobile-only">
            <p className="pricetag">{price}</p>
            <p className="opacity-60">{time}</p>
          </div>
          <button className={"button " + (priceCard.darkMode ? '' : 'button-dark')}>PICK PLAN</button>
        </div>
        <div className="price-card-price-wrapper large-only">
          <p className="pricetag">{price}</p>
          <p className="opacity-60">{time}</p>
        </div>
      </div>
    )
}

export default PriceCard