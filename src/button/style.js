import { clouds as backgroundColor, concrete } from "../colors"
import { text } from "../style"

const buttonDepth = "2px"

function getBoxShadow(color) {
    return `${ buttonDepth } ${ buttonDepth } 0 0 ${ color || concrete }`
}

export default {
    ...text,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "none",
    justifyContent: "center",
    padding: "0.5em",
    borderRadius: "0.1em",
    borderRadius: "0.2em",
    display: "flex",
    alignItems: "center",
    backgroundColor,
    cursor: "pointer",
    boxShadow: getBoxShadow(),
    outline: "none",
    display: "block",
    marginBottom: 0
}

export const hover = {
    opacity: "0.9"
}

export const active = {
    transform: `translateY(${ buttonDepth }) translateX(${ buttonDepth })`,
    boxShadow: "none"
}

export function type(type) {
    switch(type) {
        case "primary": return {
            backgroundColor: "#34495e",
            boxShadow: getBoxShadow()
        }
        default: return {}
    }
}

