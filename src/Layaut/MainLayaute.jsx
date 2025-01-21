import React from 'react';
import { Link } from 'react-router-dom';
import { CgDarkMode } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import './Layaut.css'

function MainLayaute({ children }) {
    return (
        <div className=' '>
            <div className='bg-blue-200'>
                <nav className=' px-4 py-2  mx-auto  container w-full items-center flex justify-between  ' >
                    <div className='px-2 bg-blue-700 rounded'>
                        <p className=' text-white lg:flex btn btn-primary text-3xl items-center active' >C</p>
                    </div>
                    <ul className="gap-4 align-element flex justify-center sm:justify-end menu-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/card">Card</Link>
                        </li>
                    </ul>

                    <div className='flex gap-2'>
                        <button><CgDarkMode /></button>
                        <button><CiShoppingCart /></button>
                    </div>
                </nav>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default MainLayaute;