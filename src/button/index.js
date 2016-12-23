import React, { Component } from "react"
import styled from "styled-components"
import { white, clouds, concrete } from "../colors"
import { text } from "../style"
import { Loader } from ".."

function getBackgroundColor(type) {
    switch(type) {
        case "primary": return "#34495e"
        case "danger": return "#e74c3c"
        case "submit": return "#f1c40f"
        default: return clouds
    }
}

function getColor(type) {
    if(type === "primary" || type == "danger") {
        return white
    } else {
        return "black"
    }
}

function notBusy(text) {
    return props => {
        if(!props.busy) {
            return text
        } else return ""
    }
}

function getHover() {
    return notBusy(`
        &:hover {
            box-shadow: 0 0 1px #888888;
        }
    `)
}

function getActive() {
    return notBusy(`
        &:active {
            box-shadow: none;
            filter: brightness(0.9);
            transition: 0s;
        }
    `)
}

const BaseButton = styled.button`
    ${ text }
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    justify-content: center;
    padding: 0.5em;
    border-radius: 0.1em;
    border-radius: 0.2em;
    display: flex;
    align-items: center;
    background-color: ${ props => getBackgroundColor(props.type) };
    cursor: pointer;
    outline: none;
    display: block;
    margin-bottom: 0;
    color: ${ props => getColor(props.type) };
    filter: ${ props => props.busy ? "brightness(85%)" : "" };
    position: relative;
    transition: 0.4s;

    ${ getHover() }
    ${ getActive() }
`

const LOADER_MARGIN = 1

function getLoaderDim() {
    return `calc(100% - ${ LOADER_MARGIN }em)`
}

function getLoaderBorderDistance() {
    return LOADER_MARGIN / 2 + "em"
}

const loaderStyle = {
    height: getLoaderDim(),
    width: getLoaderDim(),
    top: getLoaderBorderDistance(),
    left: getLoaderBorderDistance(),
    position: "absolute",
    opacity: "0.7"
}


export default class Button extends Component {
    state = {
        busy: false
    }

    _disableBusy(callback) {
        return (...args) => {
            if(!this.props.busy && callback) {
                callback(...args)
            }
        }
    }

    render() {
        const {
            children,
            busy,
            ...props
        } = this.props

        //if a button is busy it should not fire events
        for(let fname in props) {
            if(/^on.*$/.test(fname)) {
                props[fname] = this._disableBusy(props[fname])
            }
        }

        if(busy) {
            return <BaseButton {...props} busy>
                <div style={{ visibility: "hidden" }}>
                    { children }
                </div>
                <Loader style={ loaderStyle } />
            </BaseButton>
        } else {
            return <BaseButton {...props}>
                { children }
            </BaseButton>
        }
    }
}
