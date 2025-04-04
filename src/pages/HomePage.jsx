import { useSearchResult } from "../contexts/DefaultContext"

export default function HomePage() {

    const { searchResult } = useSearchResult();
    console.log(searchResult);
    

    return (
        <>
            <h1 className="text-center">Homepage</h1>

            <form className="my-5">
                <div className="mb-3">
                    <label htmlFor="searchText" className="form-label">Search Movies</label>
                    <input type="text" className="form-control" id="searchText" aria-describedby="searchText" />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>

            <div></div>
        </>
    )
}