function Header() {
    return (
        <header>
            <nav>
                <img src="./react_logo.png" alt="React Logo" width="40px" />
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
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
        <footer>
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