import React, { Component } from "react"
import style, { select } from "./style"

export default class Input extends Component {
    constructor(props) {
        super(...arguments)
        this.state = {
            select: false
        }
    }

    toggleSelect() {
        this.setState({
            select: !this.state.select
        })
        return Promise.resolve(...arguments)
    }

    get style() {
        let calcStyle = style
        if(this.state.select) {
            calcStyle = {
                ...calcStyle,
                ...select
            }
        }
        return calcStyle
    }

    render() {
        let {
            onFocus,
            onBlur,
            ...props
        } = this.props

        return <input 
            style={ this.style }
            onFocus={ () => this.toggleSelect().then(onFocus) }
            onBlur={ () => this.toggleSelect().then(onBlur) }
            { ...props }
        />
    }
}
