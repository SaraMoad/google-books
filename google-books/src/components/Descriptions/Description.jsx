import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchTermContextProvider'
import styles from "./Description.module.scss"
const Description = () => {
    const { searchTermContext } = useContext(SearchContext)
    return (
        <>
        { searchTermContext &&
        <div className={styles.title}>Showing Results for "{searchTermContext}"</div>
        }
    </>
    )
}

export default Description