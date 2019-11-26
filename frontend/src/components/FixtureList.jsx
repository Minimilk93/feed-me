import React from 'react'
import FixtureHeader from './FixtureHeader'
import FixtureItem from './FixtureItem'
const FixtureList = ({ listData, categories }) => {
    const outcomesData = listData && Array.from(listData)
    return (
        <>
            <div className="panel-container">
                <h2 class="accordion__trigger js-toggle__control js-toggle__state">
                    <span class="accordion__title split">
                        <span class="split__title">Outcomes</span>
                        <b class="boost-loz">
                            {outcomesData && outcomesData.length} outcomes
                        </b>
                    </span>
                </h2>

                <div class="panel-body">
                    <div className="outcomes-display-table">
                        {outcomesData &&
                            outcomesData.map(item => {
                                return <FixtureItem outcome={item} />
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FixtureList
