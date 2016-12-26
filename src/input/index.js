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

function getBorder(props) {
    switch(props.type) {
        case "borderless": return `
            border: none;
            padding: 0;
        `
        default: return `
            border: 1px solid #DDDDDD;
            border-radius: 3px;
            padding: 0.4em;

            &:focus {
                border: 1px solid rgba(81, 203, 238, 1);
            }
        `
    }
}

export default styled.input`
    ${ text }
    background-color: white;
    transition: ease 0.2s;
    box-sizing: border-box;
    ${ props => props.busy ? getBusy() : "" }
    ${ props => props.error ? getError() : "" }
    ${ props => getBorder(props) }

    &:focus {
        filter: brightness(1.1);
        color: grey;
    }
`
