import React from "react"
import { Box, Code, Input, Button } from "../../src"

export default () => {
    return <section>
        <h1>Box</h1>
        <Box title="title">
            <Input
                style={{ width: "100%" }}
                placeholder="input"
            />
            <Button
                style={{ width: "100%" }}
            >
                Button
            </Button>
        </Box>
        <Code
            style={{ width: "400px" }}
        >{`
            <Box title="title">
            <Input
                style={{ width: "100%" }}
                placeholder="input"
            />
            <Button
                style={{ width: "100%" }}
            >
                Button
            </Button>
            </Box>
        `}</Code>
    </section>
}
