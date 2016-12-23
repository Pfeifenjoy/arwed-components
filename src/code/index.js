import React, { Component } from "react"
import { white, tiber } from "../colors"
import styled from "styled-components"

const heading = styled.h3`
    margin: 0;
`

const code = styled.code`
    margin: 2em;
    display: block;
`

const Wrapper = styled.div`
    background-color: ${ tiber };
    color: ${ white };
    padding: 0.5em;
    margin: 1em;
`

export default p => {
    const {
        children,
        ...props
    } = p

    return <Wrapper {...props}>
        <heading>Source:</heading>
        <br />
        <code>{ children }</code>
    </Wrapper>
}

