import React from "react"
import ReactDOM from "react-dom"
import ComponentName from "../src"

import "../src/index.less"
import "./example.less"

const Demo = ()=>(
    <ComponentName/>
)

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)
