import React, { Component } from "react"
import style, { code, heading } from "./style"

export default class Code extends Component {
    render() {
        return <div style={ style }>
            <h3 style={ heading }>Source:</h3>
            <code style={ code }>
                { this.props.children }
            </code>
        </div>
    }
}
