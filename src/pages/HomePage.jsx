import { useSearchResult } from "../contexts/DefaultContext"

export default function HomePage() {
    const { searchText, setSearchText, searchResult, isLoaded } = useSearchResult();
    console.log(searchResult);

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <h1 className="text-center">Movie Database</h1>

            <form className="my-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="searchText" className="form-label">Search Movies</label>
                    <input type="text" className="form-control" id="searchText" aria-describedby="searchText" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>

            {isLoaded ? (

                searchResult && searchResult.results ? (
                    <div className="row">
                        {searchResult.results.map(movie => (
                            <div key={movie.id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">Original title: {movie.original_title}</p>
                                        <p className="card-text">Original language: {movie.original_language}</p>
                                        <p className="card-text">Rating: {movie.vote_average}/10</p>
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