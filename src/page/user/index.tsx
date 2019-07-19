import {Route} from "../../router"
import * as React from "react"
import Suspender from "../../component/suspender"


const User = React.lazy(() => import(/* webpackChunkName: "user" */ "./component"))

const user: Route = {
    name: "user",
    path: "/user",
    component: (
        <Suspender>
            <User/>
        </Suspender>
    )
}

export default user
