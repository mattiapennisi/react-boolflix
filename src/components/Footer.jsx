export default function Footer() {
    return (
        <footer id="footer" className="mt-5 py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}