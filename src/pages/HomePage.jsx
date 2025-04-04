import { useSearchResult } from "../contexts/DefaultContext"

export default function HomePage() {

    const { searchText, setSearchText, searchResult } = useSearchResult();
    console.log(searchResult);
    
    function handleSubmit(e) {
        e.preventDefault
    } 

    return (
        <>
            <h1 className="text-center">Homepage</h1>

            <form className="my-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="searchText" className="form-label">Search Movies</label>
                    <input type="text" className="form-control" id="searchText" aria-describedby="searchText" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>

            <div></div>
        </>
    )
}