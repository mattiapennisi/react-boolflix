import { Outlet } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main id="main" className="container py-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}