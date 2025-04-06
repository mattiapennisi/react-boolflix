import { useState } from 'react'

import { useSearchResult } from "../contexts/DefaultContext"

export default function HomePage() {
    const { searchText, setSearchText, searchResult, isLoaded } = useSearchResult()
    const [searchTextValue, setSearchTextValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        setSearchText(searchTextValue)
    }

    function getFlagCode(languageCode) {

        const languageMap = {
            'en': 'us',
            'ja': 'jp',
            'ko': 'kr',
            'zh': 'cn',
            'cs': 'cz',
        }

        return languageMap[languageCode] || languageCode
    }

    function renderStars(vote) {

        const stars = []

        for (let i = 1; i <= vote; i++) {
            stars.push(<i className="fa-solid fa-star"></i>)
        }

        for (let i = vote + 1; i <= 5; i++) {
            stars.push(<i className="fa-regular fa-star"></i>)
        }

        return stars
    }

    return (
        <>
            <h1 className="text-center">Unlimited movies, TV shows, and more</h1>

            <form className="my-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="searchText" className="form-label">Search for movies or tv shows</label>
                    <input type="text" className="form-control" id="searchText" aria-describedby="searchText" value={searchTextValue} onChange={(e) => setSearchTextValue(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>

            {isLoaded ? (
                searchResult && searchResult.length > 0 ? (
                    <div className="row">
                        {searchResult.map(result => (
                            <div
                                key={result.id}
                                className="col-md-4 mb-4"
                            >
                                <div className="card"
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/w342/${result.poster_path})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        minHeight: '300px',
                                        backgroundColor: 'rgb(20, 20, 20)'
                                    }}>
                                    <div className="card-body">
                                        <h5 className="card-title pb-4">{result.title || result.name}</h5>
                                        <p className="card-text">Original title: {result.original_title || result.original_name}</p>
                                        <p className="card-text">
                                            Original language: <img
                                                src={`https://flagcdn.com/16x12/${getFlagCode(result.original_language)}.png`}
                                                alt={result.original_language}
                                            />
                                        </p>
                                        <p className="card-text">
                                            {renderStars(Math.round(result.vote_average / 2))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No results found</div>
                )
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}