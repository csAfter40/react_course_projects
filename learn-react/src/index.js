import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header.js"
import Footer from "./Footer.js"
import MainContent from "./MainContent.js"
import "./index.css"

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