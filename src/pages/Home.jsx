import React from 'react'
import People from '../component/people'
import Carusel from '../component/carusel'
import FullCard from '../component/FullCard'
function Home() {
    return (
        <div className='container mx-auto'>
            <div className='flex gap-2'>
                <People></People>
                <Carusel></Carusel>
            </div>
            <FullCard></FullCard>
        </div>
    )
}

export default Home