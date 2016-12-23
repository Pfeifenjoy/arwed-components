import React from "react"
import styled from "styled-components"
import { text } from "../style"

function getBusy() {
    return `
        filter: brightness(0.9);
        pointer-events: none;
    `
}

function getError() {
    return `
        box-shadow: 0 0 3px 1px red;
    `
}

export default styled.input`
    ${ text }
    border: none;
    border: 1px solid #DDDDDD;
    background-color: white;
    border-radius: 3px;
    transition: ease 0.2s;
    padding: 0.4em;
    box-sizing: border-box;
    ${ props => props.busy ? getBusy() : "" }
    ${ props => props.error ? getError() : "" }

    &:focus {
        filter: brightness(1.1);
        color: grey;
        border: 1px solid rgba(81, 203, 238, 1);
    }
`
