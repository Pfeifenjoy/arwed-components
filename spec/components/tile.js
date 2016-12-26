import React from "react"
import { Tile, PlusTile, Code } from "../../src"

export default () => <section>
    <h1>Tile</h1>
    <Tile title="Title" description="description" />
    <Code>{`
        <Tile title="Title" description="description" />
    `}</Code>
    <PlusTile onClick={ () => alert("pressed tile") }/>
    <Code>{`
        <PlusTile />
    `}</Code>
</section>

