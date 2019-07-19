import {Route} from "../../router"
import * as React from "react"
import Suspender from "../../component/suspender"


const Todo = React.lazy(() => import (/* webpackChunkName: "todo" */ "./component"))

const todo: Route = {
    name: "todo",
    path: "/todo",
    component: (
        <Suspender>
            <Todo/>
        </Suspender>
    )
}

export default todo
