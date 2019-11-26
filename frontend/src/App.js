import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import FixtureList from './components/FixtureList'

function App() {
    const [list, setList] = useState(null)
    const [outcomes, setOutcomes] = useState(null)
    const [categories, setCategories] = useState(null)
    let fixtureSet = new Set()
    let outcomesSet = new Set()

    const getCategories = async () => {
        list &&
            list.map(listItem => {
                fixtureSet.add(listItem.category)
            })
        getOutcomes()
        return setCategories(fixtureSet)
    }

    const getOutcomes = async () => {
        list && filterOutcomes(list)
    }

    const filterOutcomes = list => {
        list.filter(item => {
            item.markets.filter(market => {
                if (market.outcomes.length > 0) {
                    return outcomesSet.add(item)
                }
            })
        })

        setOutcomes(outcomesSet)
    }

    useEffect(() => {
        fetch('/getEvents')
            .then(res => res.json())
            .then(data => setList(data))
            .then(getCategories())
    }, [list])

    return (
        <>
            <Header />
            <div className="sbp__flex-layout">
                <div className="sbp__main">
                    <div className="outer-page-content">
                        <div className="js-ui-state">
                            <div className="trending-bets">
                                <FixtureList
                                    listData={outcomes}
                                    categories={categories}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
