import React from "react"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Header from "./components/Header"

import HomePage from "./pages/Home"
import TributePage from "./pages/Tribute"
import GalleryPage from "./pages/Gallery"

import "./styles.scss"

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/tribute",
            element: <TributePage />
        },
        {
            path: "/gallery",
            element: <GalleryPage />
        }
    ])

    return (
        <React.Fragment>
            <Header />
            <hr />
            <RouterProvider router={router} />
        </React.Fragment>
    )
}

export default App