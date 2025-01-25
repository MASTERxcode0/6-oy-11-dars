import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Productfull() {
    const location = useLocation();
    const { id } = location.state || {};
    const [data, setData] = useState(null);
    const [color, setColor] = useState('');
    const [count, setCount] = useState('');
    const [error, setError] = useState(false);

    function handleClick() {
        const item = { id, color, count };
        localStorage.setItem('data', JSON.stringify(item));
    }

    useEffect(() => {
        if (id) {
            axios
                .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
                .then((response) => {
                    setData(response.data?.data.attributes);
                })
                .catch((error) => {
                    console.error('Error fetching product data:', error);
                    setError(true);
                });
        }
    }, [id]);

    if (error) {
        return <p>Error loading data!</p>;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container p-4 mx-auto rounded-lg mt-10 flex flex-wrap md:flex-nowrap shadow-md overflow-hidden">
            <div className="w-full md:w-1/2">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-96 rounded-lg object-cover"
                />
            </div>

            <div className="p-4 w-full md:w-1/2">
                <h3 className="text-4xl font-semibold mt-4">{data.title || 'No Title'}</h3>
                <h4 className="text-2xl text-gray-500 mt-2">{data.category || 'No Category'}</h4>
                <p className="text-gray-700 mt-2">{data.description || 'No Description Available'}</p>
                <p className="text-gray-900 font-semibold mt-4">${data.price}</p>

                <div className="mt-4 flex flex-col flex-wrap gap-2">
                    <p className="text-2xl text-gray-500 mt-2">Color</p>
                    <div className="flex gap-1">
                        {data.colors && data.colors.length > 0 ? (
                            data.colors.map((e, index) => (
                                <div key={index}>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            onChange={(e) => setColor(e.target.value)}
                                            type="radio"
                                            name="color"
                                            className="hidden peer"
                                            value={e}
                                        />
                                        <span
                                            className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer peer-checked:ring-2 peer-checked:ring-offset-1"
                                            style={{ background: e }}
                                        ></span>
                                    </label>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">No Colors Available</p>
                        )}
                    </div>
                </div>

                <div className="mt-10">
                    <label htmlFor="number" className="block mt-2 text-sm font-medium text-gray-700">
                        Amount
                    </label>
                    <select
                        onChange={(e) => setCount(e.target.value)}
                        id="number"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleClick} className="rounded-lg mt-10 p-4 bg-black text-white">
                    ADD TO BAG
                </button>
            </div>
        </div>
    );
}

export default Productfull;
