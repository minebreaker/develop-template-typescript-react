import * as React from "react"
import { createMuiTheme, CssBaseline, makeStyles } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { RouterProvider, useRoute } from "react-router5"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import LuxonUtils from "@date-io/luxon"
import { configureRouteStarted, getComponentOnRoute } from "./router"


const router = configureRouteStarted()

const theme = createMuiTheme( {
    props: {
        MuiButtonBase: {
            disableRipple: true
        }
    },
    transitions: {
        create: () => "none"
    }
} )


const useStyles = makeStyles( theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white,
            fontFamily: `"Noto Sans", Meiryo, "sans-serif"`
        }
    },
    "root": {
        margin: "1rem"
    }
}) )

export function Application() {

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}>
                    <MuiPickersUtilsProvider utils={LuxonUtils}>
                        <RouteComponent />
                    </MuiPickersUtilsProvider>
                </RouterProvider>
            </ThemeProvider>
        </>
    )
}

function RouteComponent() {

    const { route } = useRoute()
    const style = useStyles()

    return (
        <div className={style.root}>
            {getComponentOnRoute( route.name )}
        </div>
    )
}
