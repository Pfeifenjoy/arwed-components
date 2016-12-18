import React, { Component } from "react"
import Input from "./components/input"
import Button from "./components/button"
import Tile from "./components/tile"
import HeaderSection from "./components/header"
import { Header, HEADER_HEIGHT } from "../src"
import Loader from "./components/loader"
import Box from "./components/box"

export default class Root extends Component {
    render() {
        return <div>
            <Header />
            <div style={{ top: HEADER_HEIGHT, position: "absolute" }}>
                <HeaderSection />
                <Input />
                <Button />
                <Tile />
                <Loader />
                <Box />
            </div>
        </div>
    }
}
