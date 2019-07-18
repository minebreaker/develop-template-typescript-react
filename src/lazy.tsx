import * as React from "react"
import * as R from "ramda"


//const Lazy = React.lazy( () => import("./lazy") )
//<React.Suspense fallback={<p>Loading</p>}>
//<Lazy/>
//</React.Suspense>

export default function Lazy() {
    return (
        <p>
            1 + 1 = {R.add(1, 1)}
        </p>
    )
}
