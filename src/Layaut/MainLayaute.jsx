import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CgDarkMode } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import './Layaut.css'
import { TemeContext } from '../App';

function MainLayaute({ children }) {
    const { theme, setTeme } = useContext(TemeContext)

    function hendalDarc() {
        setTeme(theme =='light' ? 'dark' : 'light')
    }
    return (
        <div className=' '>
            <div className='bg-blue-200'>
                <nav className=' px-4 py-2  mx-auto  container w-full items-center flex justify-between  ' >
                    <div className='px-2  rounded'>
                        <p className=' text-white  btn btn-primary text-3xl items-center ' >C</p>
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
                        <button onClick={hendalDarc}><CgDarkMode /></button>
                        <button><CiShoppingCart /></button>
                    </div>
                </nav>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default MainLayaute;