import React from "react"
import styled from "styled-components"

const TileContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`

export default p => {
    const {
        children,
        ...props
    } = p

    return <TileContainer
        { ...props }
    >
        { children }
    </TileContainer>
}
