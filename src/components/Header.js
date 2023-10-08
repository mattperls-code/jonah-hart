import React, { useState, useEffect } from "react"

const Header = () => {
    const [showMenuBars, setShowMenuBars] = useState(true)

    useEffect(() => {
        // setup size listener to dynamically show menu bars
    }, [])

    return (
        <div className={"header"}>
            <div className={"header-left"}>
                <a href={"/"}>
                    <img src={`${process.env.PUBLIC_URL}/assets/site-images/icon.jpg`} />
                </a>
            </div>
            <h1 className={"header-text"}>Jonah Hart</h1>
            <div className={"header-right"} />
        </div>
    )
}

export default Header