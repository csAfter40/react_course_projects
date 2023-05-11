const page = (
    <div>
        <nav>
            <h1>My page</h1>
        </nav>
        <div>
            <h3>Grossery List</h3>
            <ul>
                <li>Pringles</li>
                <li>Milk</li>
                <li>Minced Meat</li>
            </ul>
        </div>
    </div>
)

// if a JSX element is directly appended on the page element, only the string 
// representation of the element will appear on the page. JSX objects needs to
// rendered by ReactDOM.
const rootElement = document.querySelector("#root")
// rootElement.append(JSON.stringify(page))


// Fixed code. ReactDOM.render is no longer used in React 18 so createRoot 
// method will be used from now on.
const root = ReactDOM.createRoot(rootElement)
root.render(page)