import React, { Component } from "react"
import buttonStyle, { hover, active, type as getTypeStyle } from "./style"

export default class Button extends Component {
    constructor() {
        super()
        this.state = {
            hover: false,
            active: false
        }
    }

    setHover(hover) {
        this.setState({
            hover
        })
        return Promise.resolve()
    }

    get style() {
        let style = {
            ...buttonStyle,
            ...getTypeStyle(this.props.type)
        }
        if(this.state.hover) {
            style = {
                ...style,
                ...hover
            }
        }
        if(this.state.active) {
            style = {
                ...style,
                ...active
            }
        }
        return style
    }

    setActive(active) {
        this.setState({ active })
        return Promise.resolve()
    }

    render() {
        let {
            style,
            children,
            onMouseEnter,
            onMouseLeave,
            onMouseDown,
            onMouseUp,
            ...props
        } = this.props

        style = {
            ...this.style,
            ...style
        }

        return <button
            ref="button"
            style={ style }
            onMouseEnter={ () => this.setHover(true).then(onMouseEnter) }
            onMouseLeave={ () => this.setHover(false).then(onMouseLeave) }
            onMouseDown={ () => this.setActive(true).then(onMouseDown) }
            onMouseUp={ () => this.setActive(false).then(onMouseUp) }
            { ...props }
        >
            { children }
        </button>
    }
}
