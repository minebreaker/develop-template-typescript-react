import * as React from "react"
import { Route } from "../router"
import { Link } from "react-router5"
import sample from "./sample/sample"


function Index() {
    return (
        <div>
            <h1>Home page</h1>
            <Link routeName={sample.name}>Go another page</Link>
        </div>
    )
}

const index: Route = {
    name: "index",
    path: "/",
    component: <Index />
}

export default index
