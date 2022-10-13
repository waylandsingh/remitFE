import React from 'react'
import charmander from '../assets/ImagesForCarousel/charmander.png'
import meowth from '../assets/ImagesForCarousel/meowth.png'
import pokemon from '../assets/ImagesForCarousel/pokemon.png'


const ImageCarousel = () => {
    const cycleThrough = () => {
        // change the state of the object (how?)
    }
    return (
        <div className="flex flex-row justify-between overflow-scroll" >
            <img src={charmander} className="order-1 mr-[150px]"alt="charmander" />
            <img src={pokemon} className="order-2 mr-[150px]"alt="pikachu" />
            <img src={meowth} className="order-0 mr-[150px]"alt="meowth" />
        </div>
    )
}

export default ImageCarousel
