import styled from "styled-components"

export const HEADER_HEIGHT = "3.5em"

export default styled.header`
    position: fixed;
    height: ${ HEADER_HEIGHT };
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #E9D460;
    width: 100%;
    z-index: 10;
    top: 0;
`
