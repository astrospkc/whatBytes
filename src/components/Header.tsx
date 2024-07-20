'use client'
import React from 'react'
import { BiMapAlt } from "react-icons/bi";

const Header = () => {
    return (
        <div className='flex top-0 justify-between flex-row border-b-2 border-gray-500'>
            <div className='w-fit p-2 text-base flex flex-row  items-center'>
                <BiMapAlt className='text-2xl mx-3' />
                <span className='text-xl font-bold'>
                    WhatBytes
                </span>
            </div>
            <div className='w-fit p-2 text-base'>profile</div>
        </div>
    )
}

export default Header
