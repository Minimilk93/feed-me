import React from 'react'
import FixtureHeader from './FixtureHeader'
import FixtureItem from './FixtureItem'
const FixtureList = ({ listData, categories }) => {
    const categoryList = categories && Array.from(categories)

    return (
        <>
            {listData &&
                categoryList.map(category => {
                    return (
                        <>
                            <FixtureHeader
                                listLength={
                                    listData &&
                                    listData.filter(
                                        item => item.category === category
                                    ).length
                                }
                                category={category}
                            />
                            {listData
                                .filter(item => item.category === category)
                                .map(categoryItem => {
                                    return (
                                        <>
                                            {categoryItem.displayed ===
                                                true && (
                                                <FixtureItem
                                                    listItem={categoryItem}
                                                />
                                            )}
                                        </>
                                    )
                                })}
                        </>
                    )
                })}
        </>
    )
}

export default FixtureList
