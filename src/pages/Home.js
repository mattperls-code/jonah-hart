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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Dui nunc mattis enim ut tellus. Lacus viverra vitae congue eu consequat ac felis donec. Sollicitudin aliquam ultrices sagittis orci. Pharetra massa massa ultricies mi. Sit amet nisl suscipit adipiscing bibendum. Eget magna fermentum iaculis eu. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Aliquet eget sit amet tellus cras adipiscing. Lorem mollis aliquam ut porttitor. Pretium vulputate sapien nec sagittis aliquam. Vulputate mi sit amet mauris. Massa ultricies mi quis hendrerit dolor magna eget. Eu nisl nunc mi ipsum. Curabitur gravida arcu ac tortor. Tortor id aliquet lectus proin nibh nisl condimentum.
                <br />
                <br />
                Malesuada fames ac turpis egestas integer. Morbi tristique senectus et netus. Et sollicitudin ac orci phasellus egestas tellus. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vel turpis nunc eget lorem dolor sed. Amet nisl purus in mollis nunc sed. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Pretium fusce id velit ut tortor pretium viverra suspendisse. Magna eget est lorem ipsum dolor sit. Cras tincidunt lobortis feugiat vivamus. Accumsan tortor posuere ac ut. A cras semper auctor neque vitae tempus quam. Tortor at risus viverra adipiscing at in tellus integer feugiat. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Eu augue ut lectus arcu bibendum at.
                <br />
                <br />
                Morbi tempus iaculis urna id volutpat. Adipiscing elit duis tristique sollicitudin nibh. Dignissim suspendisse in est ante in. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Egestas diam in arcu cursus euismod quis viverra. Massa tincidunt dui ut ornare lectus sit amet. Varius quam quisque id diam vel quam. Vivamus arcu felis bibendum ut. Mus mauris vitae ultricies leo integer. Mattis enim ut tellus elementum sagittis vitae et leo. Et netus et malesuada fames ac turpis. Sit amet aliquam id diam maecenas ultricies. Dui ut ornare lectus sit amet est placerat. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.
                <br />
                <br />
                Et molestie ac feugiat sed. Lorem ipsum dolor sit amet consectetur adipiscing elit. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Quis vel eros donec ac odio tempor orci. In ornare quam viverra orci sagittis eu. Eu mi bibendum neque egestas congue quisque egestas. Euismod in pellentesque massa placerat duis ultricies lacus sed. Id cursus metus aliquam eleifend mi. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Sed sed risus pretium quam vulputate dignissim suspendisse. Massa enim nec dui nunc mattis enim ut. Nec sagittis aliquam malesuada bibendum. Et netus et malesuada fames ac turpis egestas maecenas. A cras semper auctor neque vitae.
                <br />
                <br />
                In massa tempor nec feugiat. Feugiat vivamus at augue eget. Sed nisi lacus sed viverra tellus in hac. Maecenas volutpat blandit aliquam etiam. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Suscipit tellus mauris a diam maecenas. Tortor id aliquet lectus proin. Vulputate odio ut enim blandit volutpat maecenas. Enim tortor at auctor urna nunc. Cras semper auctor neque vitae tempus quam. Ut placerat orci nulla pellentesque dignissim. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Et netus et malesuada fames ac. Eu consequat ac felis donec et odio pellentesque. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Tristique senectus et netus et.
            </div>
        </div>
    )
}

export default HomePage