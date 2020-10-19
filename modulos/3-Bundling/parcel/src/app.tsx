import React from "react"
import Logo from "./content/logo.png"

export const App: React.FC = () => {
    return <div className="container">
        <img src={Logo}></img>
        <h1 className="logo">Hello world! Mode: {process.env.mode}</h1>
    </div>
}