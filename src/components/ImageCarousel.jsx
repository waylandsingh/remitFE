import React from 'react'
import charmander from '../assets/ImagesForCarousel/charmander.png'
import meowth from '../assets/ImagesForCarousel/meowth.png'
import pokemon from '../assets/ImagesForCarousel/pokemon.png'


const ImageCarousel = () => {
    const cycleRight = () => {
        // change the state of the object (how?)
        // going to have to use React get and set state to modify the classname (which will have to be dynnamic)
        setCarouselOrder((oldVal) => [oldVal[1], oldVal[2], oldVal[0]])
        
    }

    const cycleLeft = () => {
        // change the state of the object (how?)
        // going to have to use React get and set state to modify the classname (which will have to be dynnamic)
        setCarouselOrder((oldVal) => [oldVal[2], oldVal[0], oldVal[1]])
    }

    const [carouselOrder, setCarouselOrder] = React.useState([0,1,2])

    // state forthe order should be managed in this scope instead
    
    return (
        <div>
            <div className="flex flex-row justify-between overflow-scroll" >
                <img src={charmander} className={`order-${(carouselOrder[0])} mr-[150px]`}alt="charmander" />
                <img src={pokemon} className={`order-${(carouselOrder[1])} mr-[150px]`}alt="pikachu" />
                <img src={meowth} className={`order-${(carouselOrder[2])} mr-[150px]`}alt="meowth" />

            
            </div>

            <div onClick={cycleLeft}>Arrow Left</div>
            <div onClick={cycleRight}>Arrow Right</div>
            
            
        </div>
    )
}

export default ImageCarousel
