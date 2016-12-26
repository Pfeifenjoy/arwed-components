import styled from "styled-components"
import { confetti } from "../colors"

export const HEADER_HEIGHT = "3.5em"

export default styled.header`
    position: fixed;
    height: ${ HEADER_HEIGHT };
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: ${ confetti };
    width: 100%;
    z-index: 10;
    top: 0;
`

export Spacer from "./spacer"
export HeaderItem from "./item"
