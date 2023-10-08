import React, { useRef, useState, useEffect } from "react"

const Carousel = ({ itemData, render, width, focusTime }) => {
    // Reference to the carousel so it can be scrolled programmatically
    const ref = useRef()

    // Include the first element twice so automatic animation is seamless
    const items = [...itemData, itemData[0]]

    // Keep track of the current focused item index
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let isMounted = true

        window.setTimeout(() => {
            if(isMounted){
                if(index == 0){
                    // Instant scroll to beginning to make infinite scroll transition look instantaneous
                    ref.current.scrollTo({ left: 0 })
                }
                // Modulo keeps index within accessible range for the array
                setIndex((index + 1) % (items.length - 1))

                ref.current.scrollTo({ left: (index + 1) * width(), behavior: "smooth" })
            }
        }, focusTime)

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [index])

    // Generates an array of components created with the provided render function
    const itemRenders = []
    items.forEach((item, index) => {
        itemRenders.push(render(item, index))
    })
    
    return (
        <React.Fragment>
            <div ref={ref} className={"carousel"}>
                {
                    itemRenders
                }
            </div>
            <div className={"scroll-cover"} />
        </React.Fragment>
    )
}

export default Carousel