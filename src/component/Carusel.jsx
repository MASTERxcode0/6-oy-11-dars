import React from 'react'
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.png'
import hero3 from '../assets/images/hero3.png'
import hero4 from '../assets/images/hero4.png'

function Carusel() {
    return (<div class=" mt-10 w-1/2 flex overflow-auto rounded-md bg-sky-950 lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        <img className='w-3/6 h-ful rounded-md' src={hero1} alt="" />
        <img className='w-3/6 h-ful rounded-md' src={hero2} alt="" />
        <img className='w-3/6 h-ful rounded-md' src={hero3} alt="" />
        <img className='w-3/6 h-ful rounded-md' src={hero4} alt="" />
    </div>

    )
}

export default Carusel