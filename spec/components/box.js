import React from "react"
import { Box, Code } from "../../src"

export default () => {
    return <section>
        <h1>Box</h1>
        <Box title="title" />
        <Code>{`
            <Box title="title" />
        `}</Code>
    </section>
}
