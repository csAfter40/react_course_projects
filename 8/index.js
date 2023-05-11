function Header() {
    return (
        <header>
            <nav className="nav-container">
                <img className="logo-img" src="./react_logo.png" alt="React Logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div className="main-container">
            <h1>Why I love React?</h1>
            <ol>
                <li>It's composable</li>
                <li>It's declerative</li>
                <li>Great community</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer-container">
            <small>©2023 csAfter40 development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Page />)