import React from "react"
import styled from "styled-components"
import { confetti } from "../colors"
import { title } from "../style"

const Box = styled.div`
    position: relative;
    border: solid 1px orange;
    border-radius: 3px;
`
const TITLE_MARGIN = 0.5

const Title = styled.div`
    background-color: ${ confetti };
    width: calc(100% - ${ TITLE_MARGIN * 2 });
    padding: ${ TITLE_MARGIN }em;
    ${ title }
`

const Content = styled.div`
    padding: 0.8em;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: white;

    > * {
        margin-top: 0.3em;
        margin-bottom: 0.3em;
    }
`

export default p => {

    const {
        title,
        children,
        ...props
    } = p

    return <Box { ...props }>
        <Title>{ title }</Title>
        <Content>{ children }</Content>
    </Box>

}
