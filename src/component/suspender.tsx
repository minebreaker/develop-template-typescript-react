import * as React from "react"


export default function Suspender(props: React.PropsWithChildren<{}>) {
    return (
        <React.Suspense fallback={<p>loading...</p>}>
            {props.children}
        </React.Suspense>
    )
}
