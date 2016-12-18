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

const CONTENT_MARGIN = 0.5

const Content = styled.div`
    padding: ${ CONTENT_MARGIN }em;
    width: calc(100% - ${ CONTENT_MARGIN } em);
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
