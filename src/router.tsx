import _ from "lodash/fp"
import * as React from "react"
import { ReactElement } from "react"
import createRouter, { Router } from "router5"
import browserPlugin from "router5-plugin-browser"
import index from "./page/index"
import sample from "./page/sample/sample"


type Routes = "index" | "sample"

export interface Route {
    name: Routes
    path: string
    component: ReactElement<any, any>
}

export function configureRouteStarted(): Router {

    const router = createRouter( [
        { name: index.name, path: index.path },
        { name: sample.name, path: sample.path }
    ], { defaultRoute: index.name } )

    router.usePlugin( browserPlugin() )

    router.start( index.path )  // FIXME

    return router
}

export const getComponentOnRoute: ( name: string ) => JSX.Element = _.cond( [
    [_.eq( index.name ), () => index.component],
    [_.eq( sample.name ), () => sample.component],
    [_.stubTrue, () => <p>Not found.</p>]
] )
