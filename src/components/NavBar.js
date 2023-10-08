import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faClapperboard, faImages } from "@fortawesome/free-solid-svg-icons"

const NavBar = ({ currentPage }) => {
    return (
        <div className={"navbar"}>
            <div className={currentPage == "home" ? "active" : "inactive"}>
                <a href={"/"}>
                    <FontAwesomeIcon className={"nav-icon"} icon={faHouse} />
                    <div>Home</div>
                </a>
            </div>
            <div className={currentPage == "tribute" ? "active" : "inactive"}>
                <a href={"/tribute"}>
                    <FontAwesomeIcon className={"nav-icon"} icon={faClapperboard} />
                    <div>Tribute</div>
                </a>
            </div>
            <div className={currentPage == "gallery" ? "active" : "inactive"}>
                <a href={"/gallery"}>
                    <FontAwesomeIcon className={"nav-icon"} icon={faImages} />
                    <div>Gallery</div>
                </a>
            </div>
        </div>
    )
}

export default NavBar