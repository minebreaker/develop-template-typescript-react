import * as React from "react"
import * as R from "ramda"


export default function Lazy() {
    return (
        <p>
            1 + 1 = {R.add(1, 1)}
        </p>
    )
}
