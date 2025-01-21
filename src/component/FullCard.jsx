import React from 'react'
import pexeal from '../assets/images/pexels.png'
import pexeal1 from '../assets/images/pexels1.png'
import pexeal2 from '../assets/images/pexels2.png'
function FullCard() {
    const items = [
        {
            name: "Product 1",
            price: 100,
            img: pexeal
        },
        {
            name: "Product 2",
            price: 200,
            img: pexeal1
        },
        {
            name: "Product 3",
            price: 300,
            img: pexeal2
        }
    ];


    return (
        <div>
            <h2 class="text-3xl mb-6 font-medium tracking-wider capitalize">featured products</h2>

            <hr />
            <div className='flex gap-2 justify-between w-full mt-10 mb-10'>
                {
                    items.map((event, index) => (
                        <div className="w-1/3 rounded-lg p-4 shadow-2xl " key={index}>
                            <img src={event.img} alt={event.name} className="h-60 w-full rounded-lg" />
                            <h3 className="text-center text-2xl mt-2 mb-2 card-title">{event.name}</h3>
                            <p className=" text-center card-price">{event.price}</p>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default FullCard