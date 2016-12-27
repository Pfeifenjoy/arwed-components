import React, { Component } from "react"
import styled from "styled-components"
import { text, title } from "../style"
import { Link } from "react-router"
import DeleteSymbol from "./delete-symbol"


function getHover(props) {
    return props.onClick ? `
        box-shadow: 0 0 0.1em 0.1em #19B5FE;
        cursor: pointer;
    ` : ""
}

function getActive(props) {
    return props.onClick ? `
        filter: brightness(0.8);
        transition: 0s;
    ` : ""
}

const Tile = styled.div`
    margin: 1em;
    padding: 1em;
    min-width: 10em;
    max-width: 18em;
    min-height: 15em;
    border-radius: 0.2em;
    border: 0.1em solid #CCC;
    background-color: #FAFAFA;
    transition: 0.2s;
    position: relative;

    &:hover {
        ${ props => getHover(props) }
    }
    &:active {
        ${ props => getActive(props) }
    }
`

const Title = styled.h1`
    ${ title }
`

const Description = styled.p`
    ${ text }
`


export default class TileComponent extends Component {
    state = {
        hover: false
    }

    setHover(hover) {
        this.setState({ hover })
    }

    onMouseOver(...props) {
        this.setHover(true)
        if(this.props.onMouseOver) {
            this.props.onMouseOver(...props)
        }
    }

    onMouseOut(...props) {
        this.setHover(false)
        if(this.props.onMouseOut) {
            this.props.onMouseOut(...props)
        }
    }

    onDelete(event, ...rest) {
        event.stopPropagation()
        const { onDelete } = this.props
        if(onDelete) {
            onDelete(event, ...rest)
        }
    }

    render() {
        const {
            title,
            description,
            children,
            onDelete,
            ...props
        } = this.props

        const deleteSymbol = <span
            onClick={ this.onDelete.bind(this) }
            onMouseOver={ () => this.setHover(true) }
            onMouseOut={ () => this.setHover(false) }
            style={{ opacity: onDelete && this.state.hover ? "" : 0 }}
        >
            <DeleteSymbol  />
        </span>

        return <Tile
            { ...props }
            onMouseOver={ this.onMouseOver.bind(this) }
            onMouseOut={ this.onMouseOut.bind(this) }
        >
            { deleteSymbol }
            {
                (() => {
                    if(title) {
                        return <Title>{ title }</Title>
                    }
                })()
            }
            {
                (() => {
                    if(description) {
                        return <Description>{ description }</Description>
                    }
                })()
            }
            { children }
        </Tile>
    }
}
