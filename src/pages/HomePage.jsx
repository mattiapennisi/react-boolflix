import { useSearchResult } from "../contexts/DefaultContext"

export default function HomePage() {
    const { searchResult, isLoaded } = useSearchResult()

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

    function getGenres(ids) {

    }

    return (
        <>
            <h1 className="text-center mb-5">Unlimited movies, TV shows, and more</h1>

            {isLoaded ? (
                searchResult && searchResult.length > 0 ? (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                        {searchResult.map(result => (
                            <div
                                key={result.id}
                                className="col mb-4"
                            >
                                <div className="card"
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/w342/${result.poster_path})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
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
                                        <p className="card-text">
                                            Genres: {result.genre_ids.join(', ')}
                                        </p>
                                        <p className="card-text">
                                            {result.overview.substring(0, 200) + '...'}
                                        </p>
                                        <button className="btn btn-danger">Cast</button>
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