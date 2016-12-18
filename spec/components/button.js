import React, { Component } from "react"
import { Button, Code } from "../../src"

class BusyButton extends Component {
    state = {
        busy: false
    }

    busify() {
        this.setState({ busy: true });
        setTimeout(() => this.setState({ busy: false }), 3000);
    }

    render() {
        return <Button
            onClick={ e => this.busify() }
            busy={ this.state.busy }
        >
            press me
        </Button>
    }
}

export default class ButtonSection extends Component {
    render() {
        return <section>
            <h1>Button</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <Button>default</Button>
                <Button type="submit">submit</Button>
                <Button type="primary">primary</Button>
                <Button type="danger">danger</Button>
                <BusyButton />
            </div>
            <Code>
                {`
                <Button type="[type]">Button</Button>
                <Button busy />
                `}
            </Code>
        </section>
    }
}
