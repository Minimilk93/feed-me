import React from 'react'

const FixtureItem = ({ listItem }) => {
    return (
        <>
            <div className="cell--link">
                <a
                    href="/horse-racing/horse-racing-live/event/24985337"
                    data-analytics="[Featured] - Horse Racing"
                    className="cell--link__link  cell-text"
                >
                    <b className="cell-text__line">
                        {listItem.name.replace(/\|/g, '')}
                        <span class="cell-text__line--sub">
                            {listItem.subCategory}
                        </span>
                    </b>
                </a>
            </div>
        </>
    )
}

export default FixtureItem
