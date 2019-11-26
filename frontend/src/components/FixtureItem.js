import React from 'react'

const FixtureItem = ({ outcome }) => {
    const outcomeData = outcome.markets.filter(
        market => market.outcomes.length > 0
    )

    return (
        <>
            <div className="popular-outcome">
                <a href="/go/event/24906715" className="outcome-link">
                    <div className="outcome-details">
                        <p className="outcome-name">
                            {outcome.name.replace(/\|/g, '')}
                        </p>
                        <p className="event-name">
                            {outcomeData[0].outcomes[0].name.replace(/\|/g, '')}
                        </p>
                    </div>
                </a>
                <div className="outcome-price">
                    <div style={{ margin: 'auto' }}>
                        <span style={{ color: 'red', 'font-weight': 'bold' }}>
                            {outcomeData[0].outcomes[0].price}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FixtureItem
