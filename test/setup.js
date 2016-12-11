import jsdom from "jsdom"

if(typeof document === "undefined") {
    global.document = jsdom.jsdom("<html><body></body></html>")
    global.window = document.defaultView
    global.navigator = window.navigator
}

