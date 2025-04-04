import { useSearchResult } from "../contexts/DefaultContext"

export default function HomePage() {

    const { searchResult } = useSearchResult();

    return (
        <>
            <h1 className="text-center">Homepage</h1>

            <form className="my-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Search Movie</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>

            <div>{searchResult}</div>
        </>
    )
}