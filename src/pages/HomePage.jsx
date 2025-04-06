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

    return (
        <>
            <h1 className="text-center">Movies and TV Shows Database</h1>

            <form className="my-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="searchText" className="form-label">Search Movies or Tv Shows title</label>
                    <input type="text" className="form-control" id="searchText" aria-describedby="searchText" value={searchTextValue} onChange={(e) => setSearchTextValue(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>

            {isLoaded ? (
                searchResult && searchResult.length > 0 ? (
                    <div className="row">
                        {searchResult.map(result => (
                            <div key={result.id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title pb-4">{result.title || result.name}</h5>
                                        <img src={`https://image.tmdb.org/t/p/w185/${result.poster_path}`} alt="Movie/Tv Show poster" className='mb-3' />
                                        <p className="card-text">Original title: {result.original_title || result.original_name}</p>
                                        <p className="card-text">
                                            Original language: <img
                                                src={`https://flagcdn.com/16x12/${getFlagCode(result.original_language)}.png`}
                                                alt={result.original_language}
                                            />
                                        </p>
                                        <p className="card-text">
                                            {Math.round(result.vote_average/2)} <i class="fa fa-star" aria-hidden="true"></i> 
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