import { createContext, useContext, useState, useEffect } from 'react'

const DefaultContext = createContext()

function DefaultProvider({ children }) {
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY

    useEffect(() => {

        const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}&append_to_response=credits`
        const base_tv_shows_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}&append_to_response=credits`

        const fetchMovies = fetch(base_movies_api_url)
            .then(res => res.json())

        const fetchTvShows = fetch(base_tv_shows_api_url)
            .then(res => res.json())

        Promise.all([fetchMovies, fetchTvShows])
            .then(([moviesData, tvShowsData]) => {
                setSearchResult([...moviesData.results, ...tvShowsData.results])
                setIsLoaded(true)
                console.log(moviesData.results, tvShowsData.results)
            })
            .catch(err => {
                console.error(err)
                setSearchResult([])
                setIsLoaded(true)
            })

    }, [api_key, searchText])

    return (
        <DefaultContext.Provider
            value={{
                isLoaded,
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

export function getMoreInfo(id, mediaType = 'movie', apiKey) {
    const endpoint = mediaType === 'movie'
        ? `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        : `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`;

    return fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            const actorsData = data.cast.slice(0, 5)
            const actorsNames = actorsData.map(actor => actor.name)
            return actorsNames.join(', ')
        })
        .catch(err => {
            console.error(err)
            return ''
        });
}

export { DefaultProvider, useSearchResult }