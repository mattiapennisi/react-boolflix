import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSearchResult } from "../contexts/DefaultContext"

export default function Header() {

    const { setSearchText, genresToFilter, setGenresToFilter } = useSearchResult()
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

                    <form className="my-5 d-flex flex-wrap gap-3 align-items-center" onSubmit={handleSubmit}>
                        <div className="d-flex gap-3 align-items-center">
                            <label htmlFor="searchText" className="form-label mb-0">
                                <i className="fa-solid fa-search"></i>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="searchText"
                                value={searchTextValue}
                                onChange={(e) => setSearchTextValue(e.target.value)}
                            />
                        </div>
                        <input
                            type="checkbox"
                            id="fantasy"
                            value="14"
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setGenresToFilter([...genresToFilter, 14])
                                }
                            }}
                        />
                        <label htmlFor="fantasy">
                            Fantasy
                        </label>

                        <button type="submit" className="btn btn-danger">
                            Search
                        </button>
                    </form>

                </div>
            </nav>
        </header>
    )
}