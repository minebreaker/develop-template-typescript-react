import * as React from "react"
import { Route } from "../router"
import { Link } from "react-router5"
import user from "./user"
import todo from "./todo"


function Index() {
    return (
        <div>
            <h1>Home page</h1>
            <p><Link routeName={todo.name}>Todo</Link></p>
            <p><Link routeName={user.name}>Manage users</Link></p>
        </div>
    )
}

const index: Route = {
    name: "index",
    path: "/",
    component: <Index />
}

export default index
