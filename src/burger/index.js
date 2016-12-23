import React from "react"
import styled from "styled-components"

const Bar = styled.span`
    width: 100%;
    background-color: black;
    height: 5%;
    margin-top: 25%;
    margin-bottom: 25%;
    display: block;
`

const Burger = styled.div`
    height: 50px;
    width: 50px;
`

export default props => <Burger>
    <Bar />
    <Bar />
    <Bar />
</Burger>


