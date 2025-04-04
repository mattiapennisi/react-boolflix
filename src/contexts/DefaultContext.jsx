import { createContext, useContext, useState } from 'react'

const DefaultContext = createContext()

function DefaultProvider({ children }) {

    const [searchResult, setSearchResult] = useState(null)

    return (
        <DefaultContext.Provider
            value={{
                searchResult,
            }}
        >
            {children}
        </DefaultContext.Provider>
    )
}

function useSearchResult() {
    const context = useContext(DefaultContext)
    return context
}

export { DefaultProvider, useSearchResult }