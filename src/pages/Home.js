import React from "react"

import Carousel from "../components/Carousel"
import NavBar from "../components/NavBar"

const HomePage = () => {
    const carouselImages = [
        {
            src: `${process.env.PUBLIC_URL}/assets/site-images/carousel1.jpg`,
            position: "center"
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/site-images/carousel2.jpg`,
            position: "top"
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/site-images/carousel3.jpg`,
            position: "center"
        }
    ]

    return (
        <div className={"page-container"}>
            <div className={"carousel-container"}>
                <Carousel
                    itemData={carouselImages}
                    render={(image, index) => (
                        <img key={index} className={"carousel-image"} style={{ objectPosition: image.position }} src={image.src} />
                    )}
                    width={() => Math.min(window.innerWidth - 20, 800)}
                    focusTime={5000}
                />
            </div>
            <NavBar currentPage={"home"} />
            <hr style={{ margin: "auto", marginTop: 15, marginBottom: 20, width: "50%" }} />
            <div className={"legacy-text"}>
                <h2>Jonah's Legacy</h2>
                Jonah Maxwell Hart, beloved by so many, passed peacefully in his sleep on the morning of Monday, October 2. Jonah valiantly fought glioblastoma for the last 13 months. Despite the impact of cancer on his physical body, Jonah continued to embrace all that life can offer until the very end. Jonah was a source of light, humor, and strength to all who knew him.
                <br /><br />
                Jonah was born in Pittsburgh, Pennsylvania on September 4, 2006. He joined his parents, Chris and Lorien Hart, and big sister Abigail, in their Highland Park home. His childhood was full of gathering with other kids on the block. There were many moments that included ice cream cones, days splashing around, and lemonade stands. It was a wonderful place to grow up and Jonah was essential to its spark.
                <br /><br />
                He began attending Montessori Centre Academy (MCA) when he was 3 and quickly grew, not only his intellectual knowledge, but also in how to make friends, be a part of a larger community, and engage the natural world. Jonah continued at MCA until the 6th grade when he began at The Barack Obama Academy of International Studies.
                <br /><br />
                A young man of many talents, Jonah was a rabid Michigan Wolverine fan, a beautiful artist, a competitive speed cuber, a crafty magician, a black belt in Taekwondo, a late night gamer, a fierce deck hockey player, a daredevil BMX bike rider, a double black diamond skier, but most importantly, a beloved friend, brother, and son.
                <br /><br />
                While attending Obama Academy from 6th grade until his passing, Jonah was a straight-A student who fully participated in the school's International Baccalaureate Program. He was on track to be a class valedictorian, maintaining his standing, even as he endured daily radiation. He was a proud member of the Obama Class of 2024.
                <br /><br />
                Of all of the places in the world, Camp Harlam was his favorite. He began attending sleep-away camp as a 7-year-old and made it his summer home every year since. He accompanied his fellow campers on a trip to Israel in 2022 and spent this past summer as a Counselor-in-Training. As you pull into the camp in Kunkletown, there are signs that say "Welcome Home" and this was true for Jonah. Jonah's summer home filled him with joy and he filled it with his humor and wisdom.
                <br /><br />
                As a 5th generation Wolverine, Jonah comes from a long line of Michigan scholars, including his sister, parents, grandparents, great-grandfather, cousins, aunts, uncles, and family friends. He was cheering for his first Michigan football game when he was just days old and regularly went to "The Big House" for home games.
                <br /><br />
                He is survived by his parents, Chris and Lorien Hart; sister, Abigail Hart; more best friends than he could count; as well as many grandparents, aunts and uncles, cousins, friends, teachers, extended family, neighbors, and fans of his hair.
            </div>
        </div>
    )
}

export default HomePage