import * as React from "react"
import * as ReactDOM from "react-dom"

const Lazy = React.lazy(() => import("./lazy"))


export function main() {
    ReactDOM.render(
        <React.Suspense fallback={<p>Loading</p>}>
            <Lazy/>
        </React.Suspense>,
        document.getElementById("app")
    )
}

document.addEventListener("DOMContentLoaded", () => {
    main()
})
