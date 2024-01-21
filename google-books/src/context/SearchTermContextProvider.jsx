import React, { createContext } from 'react'
import { useState } from "react"

export const SearchContext = createContext(null)

const SearchTermContextProvider = ({ children }) => {
    const [searchTermContext, setSearchTermContext] = useState("")
    return (
        <SearchContext.Provider value={{ searchTermContext, setSearchTermContext }}>{children}</SearchContext.Provider>
    );
}

export default SearchTermContextProvider