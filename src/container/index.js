import styled from "styled-components"

function getCenter(props) {
    return props.center ?
        `
            display: flex;
            justify-content: center;
            align-items: center;
        ` : ""
}

export default styled.div`
    min-width: 100%;
    min-height: 100%;
    ${ props => getCenter(props) }
`
