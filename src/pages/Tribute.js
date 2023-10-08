import React from "react"

import NavBar from "../components/NavBar"

const TributePage = () => {
    return (
        <div className={"page-container"}>
            <iframe className={"tribute"} src={"https://drive.google.com/file/d/1AGxPn8fDKAxCtF4UXTqfXR0lFs06LCJb/preview"} allow="autoplay" />
            <NavBar currentPage={"tribute"} />
        </div>
    )
}

export default TributePage