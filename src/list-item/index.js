import React from "react"
import styled from "styled-components"
import { text } from "../style"

const borderColor = "#95a5a6"

const ListItem = styled.li`
    ${ text }
    list-style-type: none;
    border-top: 1px solid ${ borderColor };
    border-bottom: 1px solid ${ borderColor };
    min-height: 3em;
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    transition: 0.2s;

    &:hover {
        background-color: #ecf0f1;
    }

    &:active {
        background-color: #bdc3c7;
        transition: 0s;
    }
`

export default ListItem
