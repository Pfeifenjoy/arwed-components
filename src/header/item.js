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

    &:hover {
        background-color: #F4B350;
    }
`

