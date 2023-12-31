import React from "react"
import reactLogo from '../assets/react.svg'

export default function Header() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course</h4>
        </nav>
    )
}