import React from "react"
import styled from "styled-components"
import { text } from "../style"

export default styled.input`
    ${ text }
    border: none;
    outline-width: 0;
    overflow: auto;
    outline: none;
    resize: none;
    border: 1px solid #DDDDDD;
    background-color: white;
    border-radius: 3px;
    transition: ease 0.2s;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;

    &:focus {
        opacity: 0.5;
        border: 1px solid rgba(81, 203, 238, 1);
    }
`
