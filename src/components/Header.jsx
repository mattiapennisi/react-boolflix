import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSearchResult } from "../contexts/DefaultContext"

export default function Header() {

    const { searchText, setSearchText } = useSearchResult()
    const [searchTextValue, setSearchTextValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        setSearchText(searchTextValue)
        setSearchTextValue('')
    }

    return (
        <header id="header" className="mb-4">
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <Link className="navbar-brand" to="/">
                        <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix logo" />
                    </Link>

                    <form className="my-5 d-flex gap-3" onSubmit={handleSubmit}>
                        <div className="mb-3 d-flex gap-3">
                            <label htmlFor="searchText" className="form-label"><i className="fa-solid fa-search"></i></label>
                            <input type="text" className="form-control" id="searchText" aria-describedby="searchText" value={searchTextValue} onChange={(e) => setSearchTextValue(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>

                </div>
            </nav>
        </header>
    )
}