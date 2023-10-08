import React, { useState, useEffect } from "react"

import NavBar from "../components/NavBar"

const GalleryPage = () => {
    // generated with helper.js in root of dir
    const imagePaths = ["11054ec0-0872-3ff0-90c4-74931b869660.jpg","1a231cad-ca0d-3670-9770-79b4bad3c5f1.jpg","37f5b5f6-3755-31ea-ac42-2158b2a0119e.jpg","3ce77330-bdaf-3a20-aef0-ea91df55e1ad.jpg","4274e6b1-cd7f-3c9d-b762-a853afd0751e.jpg","5092b0e0-b219-3e14-bb2f-3e01205c5f08.jpg","52379d08-3c48-37c9-b5f8-071162a1f7c3.jpg","590b0091-f4b9-3067-a8ec-9162f736cc7e.jpg","5acef597-9f77-309f-917c-dff6d0856296.jpg","63651c3b153b09e1328b4a26.jpg","63651c3c153b09e1328b4a28.jpg","63651c3c153b09e1328b4a2a.jpg","78b41531-82b5-3a26-baed-ee00e761faf5.jpg","81d22f32-c67d-3dd4-b80b-f029eb32aab7.jpg","8a4a671e-0845-3b10-a4cc-e6ea3bd90784.jpg","8b99b96d-3633-3b2b-8f9e-44b30e33c033.jpg","92309205-b5e2-31a9-956d-a9e68fcd3b28.jpg","9cba918a-4252-3c9c-bae3-beca552b64f8.jpg","a2d011ec-e40e-30f9-aac9-d21655b8daa2.jpg","a5ed90db-be06-3c54-b056-186378facf19.jpg","ad3100ed-0d8d-382f-84d2-75e46fb113fa.jpg","b454727a-c56e-3709-85f3-17f9091d960f.jpg","bbf3cc81-7432-3cc4-8136-47a85d5719e5.jpg","bec3a7ad-ea14-3c04-84a7-da46d9db5473.jpg","bfc90c37-4291-369a-a23a-51a5d71abb85.jpg","d59a0281-dfe6-3080-a67c-40b29a3e3d6f.jpg","e8cba1a2-b83b-3ef1-a491-0e9b4c65f0bc.jpg","fa382418-a5c5-3594-b83f-981a3e0d4b50.jpg","fd6e999a-5dae-3f0b-b1a7-e9c6676e9cd5.jpg","fe512fe1-cab0-309d-b4ad-acb7b1b2f3a7.jpg","Photo Aug 05 2023, 7 21 51 PM.jpg","Photo Aug 14 2023, 6 32 46 PM.jpg","Photo Aug 16 2023, 10 19 36 PM.jpg","Photo Aug 16 2023, 10 26 10 PM.jpg","Photo Aug 16 2023, 10 26 57 PM.jpg","Photo Aug 16 2023, 10 31 05 PM.jpg","Photo Aug 17 2023, 12 16 28 AM.jpg","Photo Aug 17 2023, 12 20 38 AM.jpg","Photo Aug 17 2023, 12 22 44 AM.jpg","Photo Aug 17 2023, 12 23 16 AM.jpg","Photo Aug 17 2023, 12 24 04 AM.jpg","Photo Aug 17 2023, 12 24 12 AM.jpg","Photo Aug 17 2023, 12 24 23 AM.jpg","Photo Aug 17 2023, 12 24 40 AM.jpg","Photo Aug 17 2023, 12 24 50 AM.jpg","Photo Aug 17 2023, 12 30 25 AM.png","Photo Aug 17 2023, 12 31 17 AM.png","Photo Aug 17 2023, 12 31 36 AM.png","Photo Aug 17 2023, 5 47 30 PM.jpg","Photo Aug 18 2023, 11 48 55 AM.jpg","Photo Aug 18 2023, 11 49 08 AM.png","Photo Aug 18 2023, 11 49 12 AM.png","Photo Aug 18 2023, 11 49 27 AM.png","Photo Aug 18 2023, 11 49 30 AM.png","Photo Aug 18 2023, 11 49 32 AM.png","Photo Aug 18 2023, 11 49 54 AM.png","Photo Aug 18 2023, 11 50 16 AM.png","Photo Aug 18 2023, 11 50 51 AM.png","Photo Aug 18 2023, 11 50 56 AM.jpg","Photo Aug 18 2023, 11 51 02 AM.png","Photo Aug 18 2023, 11 51 09 AM.png","Photo Aug 19 2023, 6 41 00 PM.jpg","Photo Aug 20 2023, 10 11 46 PM.jpg","Photo Aug 20 2023, 10 15 29 PM.jpg","Photo Aug 20 2023, 10 17 23 PM (1).jpg","Photo Aug 20 2023, 10 17 23 PM.jpg","Photo Aug 20 2023, 10 24 28 PM.jpg","Photo Aug 20 2023, 10 24 29 PM (1).jpg","Photo Aug 20 2023, 10 24 29 PM (2).jpg","Photo Aug 20 2023, 10 24 29 PM (3).jpg","Photo Aug 20 2023, 10 24 29 PM (4).jpg","Photo Aug 20 2023, 10 24 29 PM (5).jpg","Photo Aug 20 2023, 10 24 29 PM (6).jpg","Photo Aug 20 2023, 10 24 29 PM (7).jpg","Photo Aug 20 2023, 10 24 29 PM (8).jpg","Photo Aug 20 2023, 10 24 29 PM (9).jpg","Photo Aug 20 2023, 10 24 29 PM.jpg","Photo Aug 20 2023, 10 24 30 PM.jpg","Photo Jul 01 2022, 1 32 26 PM.jpg","Photo Jul 01 2022, 1 33 24 PM.jpg","Photo Jul 02 2021, 7 01 36 PM.jpg","Photo Jul 02 2023, 12 13 26 AM.jpg","Photo Jul 02 2023, 8 36 32 PM.jpg","Photo Jul 02 2023, 8 36 33 PM.jpg","Photo Jul 15 2023, 6 22 57 PM.jpg","Photo Jul 15 2023, 6 22 58 PM.jpg","Photo Jul 16 2023, 8 28 23 PM.jpg","Photo Jul 17 2021, 10 40 49 AM.jpg","Photo Jul 17 2021, 6 36 13 PM.jpg","Photo Jul 20 2021, 10 16 36 PM.jpg","Photo Jul 21 2022, 11 05 25 PM.jpg","Photo Jul 22 2019, 10 07 14 PM.jpg","Photo Jul 22 2022, 12 30 59 AM.jpg","Photo Jul 22 2023, 10 13 41 AM.jpg","Photo Jul 24 2022, 12 58 33 AM.jpg","Photo Jul 24 2022, 12 58 35 AM.jpg","Photo Jul 25 2023, 7 04 43 PM.jpg","Photo Jul 29 2023, 10 56 00 PM (1).jpg","Photo Jul 29 2023, 10 56 00 PM (2).jpg","Photo Jul 29 2023, 10 56 00 PM (3).jpg","Photo Jul 29 2023, 10 56 00 PM.jpg","Photo Jul 30 2023, 2 49 43 AM.jpg","Photo Jul 31 2023, 9 41 06 PM.jpg","Photo Jun 30 2023, 5 54 28 PM.jpg","Photo May 06 2023, 5 36 21 PM.jpg","Photo May 06 2023, 5 36 24 PM.jpg","Photo Nov 13 2022, 9 51 45 AM.png","Photo Nov 14 2022, 6 36 05 PM.jpg","Photo Nov 16 2022, 9 05 01 AM.png","summertimeforever.jpg"]

    const galleryImages = imagePaths.map((imagePath, index) => {
        return (
            <div key={index} onClick={() => setFocusedIndex(index)} className={"image-container"}>
                <img src={`${process.env.PUBLIC_URL}/assets/gallery-images/${imagePath}`} />
            </div>
        )
    })

    const [focusedIndex, setFocusedIndex] = useState(-1)

    useEffect(() => {
        document.body.style.overflow = focusedIndex == -1 ? "auto" : "hidden"
    }, [focusedIndex])

    return (
        <React.Fragment>
            <div className={"page-container"}>
                <NavBar currentPage={"gallery"} />
            </div>
            <div className={"gallery-container"}>
                {
                    galleryImages
                }
            </div>
            {
                focusedIndex != -1 && (
                    <div onClick={() => setFocusedIndex(-1)} className={"gallery-focus-overlay"}>
                        <img src={`${process.env.PUBLIC_URL}/assets/gallery-images/${imagePaths[focusedIndex]}`} />
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default GalleryPage