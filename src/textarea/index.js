import React, { Component } from "react"
import styled from "styled-components"
import { text } from "../style"
import ContentEditable from "react-contenteditable"

const entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}

const css = `
    ${ text }
    border: none;
    outline-width: 0;
    overflow: auto;
    outline: none;
    resize: none;
    background-color: inherit;
    cursor: text;
    white-space: pre-wrap;

    &[contenteditable="true"]:empty:before {
        display: block;
        content: attr(placeholder);
        opacity: 0.5;
    }

    &:focus {
        opacity: 0.7;
    }
`

const TextArea = styled.textarea`${ css }`
const DivArea = styled(ContentEditable)`${ css }`

export default class Textarea extends Component {
    state = {
        text: escapeHtml(this.props.value || this.props.defaultValue)
    }

    handleChange(event) {
        const { onChange, autosize } = this.props
        if(autosize) {
            const text = event.target.value
            this.setState({ text })
            event.target.value = event.currentTarget.innerText
        }
        if(onChange) {
            onChange(event)
        }
    }
    render() {
        const {
            autosize,
            defaultValue,
            value,
            onChange,
            ...props
        } = this.props

        const { text } = this.state

        if(autosize) {
            return <DivArea
                onChange={ this.handleChange.bind(this) }
                html={ text }
                { ...props }
            />
        } else {
            return <TextArea
                value={ text }
                { ...props }
            />
        }
    }
}

