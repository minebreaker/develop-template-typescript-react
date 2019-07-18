import * as React from "react"
import { Route } from "../../router"
import { Link } from "react-router5"
import index from "../index"


function Sample() {
    return (
        <div>
            <h1>Sample page</h1>
            <Link routeName={index.name}>Back to index</Link>
        </div>
    )
}

const sample: Route = {
    name: "sample",
    path: "/sample",
    component: <Sample />
}

export default sample
