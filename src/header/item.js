import styled from "styled-components"
import { Link } from "react-router"
import { text } from "../style"

export default styled(Link)`
    ${ text }
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    text-decoration: inherit;
    color: inherit;
    transition: 0.2s;

    &:hover {
        background-color: #F4B350;
    }

    &:active {
        transition: 0s;
        filter: brightness(0.8);
    }
`

