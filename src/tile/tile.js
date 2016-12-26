import React from "react"
import styled from "styled-components"
import { text, title } from "../style"
import { Link } from "react-router"


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


export default p => {
    const {
        title,
        description,
        children,
        ...props
    } = p

    return <Tile { ...props }>
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
