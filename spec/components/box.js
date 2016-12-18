import React from "react"
import { Box, Code, Input } from "../../src"

export default () => {
    return <section>
        <h1>Box</h1>
        <Box title="title">
            <Input
                style={{ width: "100%" }}
                placeholder="input"
            />
        </Box>
        <Code>{`
            <Box title="title">
            <Input
                style={{ width: "100%" }}
                placeholder="input"
            />
            </Box>
        `}</Code>
    </section>
}
