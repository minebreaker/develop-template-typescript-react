import * as React from "react"
import * as ReactDOM from "react-dom"
import { Application } from "./application"


export function main() {
    ReactDOM.render(
        <Application />,
        document.getElementById( "app" )
    )
}

document.addEventListener( "DOMContentLoaded", () => {
    main()
} )
