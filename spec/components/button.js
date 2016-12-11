import React, { Component } from "react"
import { Button, Code } from "../../src"

export default class ButtonSection extends Component {
    render() {
        return <section>
            <h1>Button</h1>
            <Button>Button</Button>
            <Code>
                {`
                <Button>Button</Button>
                `}
            </Code>
            <Button type="primary">Button</Button>
            <Code>
                {`
                <Button type="primary">Button</Button>
                `}
            </Code>
        </section>
    }
}
