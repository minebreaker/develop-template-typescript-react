import _ from "lodash/fp"
import * as React from "react"
import { ReactElement } from "react"
import createRouter, { Router, Route as Router5Route } from "router5"
import browserPlugin from "router5-plugin-browser"
import index from "./page/index"
import user from "./page/user"
import todo from "./page/todo"


export interface Route extends Router5Route {
    name: string
    path: string
    component: ReactElement<{}, any>
}

export function configureRoute(): Router {

    const router = createRouter( [
        index,
        user,
        todo
    ], { defaultRoute: index.name } )

    router.usePlugin( browserPlugin() )

    return router
}

const tup = <T, U>(arg1: T, arg2: U) => [arg1, arg2] as [T, U]
const match = ( route: Route ) => tup(_.eq(route.name), () => route.component)

export const getComponentOnRoute: ( name: string ) => JSX.Element = _.cond( [
    match(index),
    match(todo),
    match(user),
    [_.stubTrue, () => <p>Not found.</p>]
] )
