import React from "react"
import styled from "styled-components"

const SIZE = 2

const DeleteSymbol = styled.span`
    position: absolute;
    display: block;
    top: -${ SIZE / 2 }em;
    right: -${ SIZE / 2 }em;
    width: ${ SIZE }em;
    height: ${ SIZE }em;
    fill: red;
    cursor: pointer;
`

export default () => <DeleteSymbol><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1225 1079l-146 146q-10 10-23 10t-23-10l-137-137-137 137q-10 10-23 10t-23-10l-146-146q-10-10-10-23t10-23l137-137-137-137q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l137 137 137-137q10-10 23-10t23 10l146 146q10 10 10 23t-10 23l-137 137 137 137q10 10 10 23t-10 23zm215-183q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg></DeleteSymbol>
