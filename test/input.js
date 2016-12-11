import setup from "./setup"
import React from "react"
import ReactDOM from "react-dom"
import assert from "assert"
import renderer from "react-test-renderer"
import TestUtils from "react-addons-test-utils"
import { Input } from "../src"

describe("Input", function() {
    describe("rendering a blank component", function() {
        const component = renderer.create(
            <Input />
        )
        it("does not contain anything", () => {
            assert.equal(component.toJSON().props.value, undefined)
        })
    })
    describe("enter something into the component", function() {
        let caughtEvent = null;
        const change = e => {
            caughtEvent = e
        }
        const value = "weprü+32dd-"
        const component = TestUtils.renderIntoDocument(<Input onChange={ change } />)
        const input = TestUtils.findRenderedDOMComponentWithTag(component, "input")
        input.value = value
        TestUtils.Simulate.change(input)
        var dom = ReactDOM.findDOMNode(component)
        it("the state should be changed", () => {
            assert(dom.value === value)
        })
        it("calls the onChange callback", () => {
            assert(caughtEvent !== null, "check if event is passed")
        })
    })
})


