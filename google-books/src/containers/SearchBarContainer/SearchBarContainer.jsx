import SearchBar from "../../components/SearchBar/SearchBar"
import Description from "../../components/Descriptions/Description"
import { useState } from "react"

const SearchBarContainer = () => {
    const [searchTerm, setSearchTerm] = useState(null)
    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
        </>
    )
}

export default SearchBarContainer