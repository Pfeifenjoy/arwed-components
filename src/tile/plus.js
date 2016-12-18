import React, { Component } from "react"
import Tile from "./tile"
import styled from "styled-components"

const PLUS_DIM = 5;

const Plus = styled.svg`
    width: ${ PLUS_DIM }em;
    height: ${ PLUS_DIM }em;
    margin: 0 auto;
    position: absolute;
    display: block;
    top: calc(50% - ${ PLUS_DIM / 2 }em);
    left: calc(50% - ${ PLUS_DIM / 2 }em);
    opacity: 0.3;
`

export default class PlusTile extends Component {
    state = {
        hover: false
    }

    setHover(hover) {
        this.setState({ hover })
        return Promise.resolve()
    }

    render() {
        const {
            onMouseEnter,
            onMouseLeave,
            href,
            ...props
        } = this.props

        const hoverStyle = this.state.hover ? { opacity: "0.5" } : {}

        return <Tile
            onMouseEnter={ () => this.setHover(true).then(onMouseEnter) }
            onMouseLeave={ () => this.setHover(false).then(onMouseLeave) }
            href={ href || "#" }
            { ...props }>
            <Plus
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
                style={ hoverStyle }
            ><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></Plus>
        </Tile>
    }
}
