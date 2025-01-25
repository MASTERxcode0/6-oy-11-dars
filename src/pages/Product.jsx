import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [order, setOrder] = useState("a-z");
  const [price, setPrice] = useState(100000);
  const [shipping, setShipping] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://strapi-store-server.onrender.com/api/products')
      .then((response) => {
        setData(response.data?.data || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate('/productfull', { state: { id } });
  };
  function handleFilter(e) {

    e.preventDefault()
    return
  }
  return (
    <div className='container mx-auto py-4'>
      <div className='w-full bg-[#f0f6ff] mt-10 mb-10 flex justify-between flex-wrap p-5 gap-6'>
        <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
          <label htmlFor="search">Search Product</label>
          <input value={product} placeholder='Type here' onChange={(e) => setProduct(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" type="text" id="search" />
        </div>
        <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
          <label htmlFor="category">Select Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" id="category">
            <option value="all">all</option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Kids">Kids</option>
            <option value="Sofas">Sofas</option>
            <option value="Beds">Beds</option>
          </select>
        </div>
        <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
          <label htmlFor="company">Select Company</label>
          <select value={company} onChange={(e) => setCompany(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" id="company">
            <option value="all">all</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
          </select>
        </div>
        <div className='w-[23%] flex flex-col items-start gap-3 justify-center mb-10'>
          <label htmlFor="order">Sort By</label>
          <select value={order} onChange={(e) => setOrder(e.target.value)} className="w-full bg-white p-2 outline-none focus:outline-black rounded-md" id="order">
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className='w-[23%] flex flex-col items-center justify-center gap-4'>
          <div className='w-full flex justify-between item-center'>
            <label htmlFor="price">Select price</label>
            <span>${price}</span>
          </div>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="range" min={0} max={10000} className="w-full range range-info w-full bg-white p-2 rounded-md" id="price" />
          <div className='w-full flex justify-between item-center'>
            <span>0</span>
            <b>Max: <span>$1,000,00</span></b>
          </div>
        </div>
        <div className='w-[23%] flex flex-col items-center justify-center'>
          <label htmlFor="shipping" className="label cursor-pointer flex flex-col gap-4">
            <span className="label-text">Free Shipping</span>
            <input checked={shipping} onChange={() => setShipping(!shipping)} id="shipping" type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>
        <div className="w-[23%] flex items-center justify-center">
          <button onClick={handleFilter} className="outline-none border-0 w-full py-2 uppercase text-white rounded-lg bg-blue-500 btn btn-active btn-primary">search</button>
        </div>
        <div className="w-[23%] flex items-center justify-center">
          <button className="outline-none border-0 w-full py-2 uppercase text-white rounded-lg bg-purple-500 btn btn-active btn-secondary">reset</button>
        </div>
      </div>
      <div className="container mx-auto ">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-between">
            {data.map((product) => (
              <div
                key={product.id}
                onClick={() => handleCardClick(product.id)}
                className="p-4 w-[30%] border rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <img
                  src={product.attributes.image}
                  alt={product.attributes.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold mt-4">
                  {product.attributes.title}
                </h3>
                <p className="text-gray-700 mt-2">
                  {product.attributes.price ? `$${product.attributes.price}` : 'No Price'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
