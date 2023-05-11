const page = (
    <div>
        <nav>
            <img src="./react_logo.png" alt="React Logo" width="40px" />
        </nav>
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprice apps, including mobile apps</li>
            </ul>
        </div>
    </div>
)

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(page)
