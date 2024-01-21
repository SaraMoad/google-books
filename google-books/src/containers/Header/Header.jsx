import React, { useContext } from 'react'
import SearchBarContainer from '../SearchBarContainer/SearchBarContainer'
import styles from "./Header.module.scss"
import { SearchContext } from '../../context/SearchTermContextProvider'
const Header = () => {
    const { searchTermContext } = useContext(SearchContext)
    const containerClassList = [styles.container]
    const headingClassList = [styles.heading]
    !searchTermContext ? containerClassList.push(styles.before__search) && headingClassList.push(styles.heading__container__before) : containerClassList.push(styles.after__search)  && headingClassList.push(styles.heading__container__after)

    return (
        <div className={containerClassList.join(" ")}>
            <div className={headingClassList.join(" ")}>
            <h1>Google Books</h1>
            <h4>A page using react that interacts with the Google Books Api</h4>
            </div>
            <SearchBarContainer />
        </div>
    )
}

export default Header