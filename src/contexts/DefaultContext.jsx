import { createContext, useContext, useState, useEffect } from 'react'

const DefaultContext = createContext()

function DefaultProvider({ children }) {

    const [searchText, setSearchText] = useState('null')
    const [searchResult, setSearchResult] = useState(null)

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                setIsLoaded(true)
                setSearchResult(data)
            })
            .catch(err => {
                console.error(err)
                setSearchResult(null)
            })
    }, [searchText, base_movies_api_url])

    return (
        <DefaultContext.Provider
            value={{
                searchText,
                setSearchText,
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