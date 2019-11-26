import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import FixtureList from './components/FixtureList'

function App() {
    const [list, setList] = useState(null)
    const [categories, setCategories] = useState(null)
    let fixtureSet = new Set()

    const getCategories = async () => {
        list &&
            list.map(listItem => {
                fixtureSet.add(listItem.category)
            })

        return setCategories(fixtureSet)
    }

    useEffect(() => {
        fetch('/getEvents')
            .then(res => res.json())
            .then(data => setList(data))
            .then(getCategories())
    }, [list])

    return (
        <div className="sbp__main">
            <Header />
            <div className="accordion__content">
                <FixtureList listData={list} categories={categories} />
            </div>
        </div>
    )
}

export default App
