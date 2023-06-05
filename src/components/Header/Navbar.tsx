import React from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsMicFill, BsPeople } from 'react-icons/bs';
import { CiMenuKebab } from 'react-icons/ci';

import SearchBar from './SearchBar';
import Sidebar from './Sidebar';

const Navbar = () => {
    return (
        <nav className='flex w-screen h-auto justify-between px-10 items-center relative'>
            <div className='flex'>
                <button className=' pr-4'>
                    <AiOutlineMenu />
                </button>
                <img
                    className=' w-36'
                    src='https://i.namu.wiki/i/FfTtXU4PbNB6kSKY5vcMYOMnBcLqXW9NuBHxPQTJAJIm1lrw7Ugu-OTkbcK0SnAgAf5ju5mSuubZrNJ0DJP6XkPt5S0N3k_kHt_hGZ12ay5XqbGxvEcq0_BsLUzDqxmlmjYCDiwKCf3ElnX5lwu_PA.svg'
                    alt=''
                />
            </div>
            <div className='flex'>
                <SearchBar />
                <button>
                    <BsMicFill />
                </button>
            </div>
            <div className='flex'>
                <button className='block'>
                    <CiMenuKebab />
                </button>
                <button className='block pl-4'>
                    <span>
                        <BsPeople />
                        로그인
                    </span>
                </button>
            </div>
            {/* <Sidebar /> */}
        </nav>
    );
};

export default Navbar;
