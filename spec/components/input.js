import React from "react"
import { Input } from "../../src"
import { Code } from "../../src"

const InputSection = () => {
    return <div>
        <h1>Input</h1>
        <h2>Properties</h2>
        <ul>
            <li>placeholder</li>
            <li>text</li>
        </ul>
        <Input placeholder="placeholder" />
        <br />
        <Input placeholder="placeholder" busy />
        <br />
        <Input placeholder="placeholder" error />
        <Code>
            {`
            <Input placeholder="placeholder" />
            `}
        </Code>

    </div>
}

export default InputSection
