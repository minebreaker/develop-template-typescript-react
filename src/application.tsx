import * as React from "react"
import {createMuiTheme, CssBaseline, makeStyles} from "@material-ui/core"
import {ThemeProvider} from "@material-ui/styles"
import {RouterProvider} from "react-router5"
import {MuiPickersUtilsProvider} from "@material-ui/pickers"
import LuxonUtils from "@date-io/luxon"
import {configureRoute, getComponentOnRoute} from "./router"
import {Provider as StoreProvider, useSelector} from "react-redux"
import rootReducer from "./reducer"
import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {createRouteNodeSelector, router5Middleware} from "redux-router5"


export const router = configureRoute()

const theme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true
        }
    },
    transitions: {
        create: () => "none"
    }
})


const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white,
            fontFamily: `"Hiragino Kaku Gothic ProN", "Noto Sans", "Helvetica Neue", Helvetica, "Segoe UI", Meiryo, "sans-serif"`
        }
    },
    "root": {
        margin: theme.spacing(3)
    }
}))

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
    thunk,
    router5Middleware(router))
))

export function Application() {

    return (
        <RouterProvider router={router}>
            <StoreProvider store={store}>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={LuxonUtils}>
                        <RouteComponent/>
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </StoreProvider>
        </RouterProvider>
    )
}

const routeNodeSelector = createRouteNodeSelector("")

function RouteComponent() {

    const {route: {name}} = useSelector<any, { route: { name: string } }>(routeNodeSelector)

    const style = useStyles()

    return (
        <div className={style.root}>
            {getComponentOnRoute(name)}
        </div>
    )
}
