import "core-js"

import * as React from "react"
import * as ReactDOM from "react-dom"
import {Application, router} from "./application"


export function main() {
    router.start(() => {
        ReactDOM.render(
            <Application />,
            document.getElementById( "app" )
        )
    })
}

document.addEventListener( "DOMContentLoaded", () => {
    main()
} )
