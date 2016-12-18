import React from "react"
import { Loader, Code } from "../../src"

export default () => {
    return <section>
        <h1>Loader</h1>
        <Loader />
        <Code>{`
            <Loader />
        `}</Code>
    </section>
}
