import {Link} from "react-router5"
import index from "../index"
import * as React from "react"


export default function Todo() {
    return (
        <div>
            <h1>TODO</h1>
            <Link routeName={index.name}>Back</Link>
        </div>
    )
}
