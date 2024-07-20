"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { BsClipboard2Fill } from "react-icons/bs";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
BsClipboard2Fill
const SideBar = () => {
    return (
        <div className='gap-2 flex flex-col w-fit m-auto  h-full'>
            {/* dashboard, skill test, internship */}
            <Button>
                <BsBarChartFill className='mr-3' />Dashboard</Button>
            <Button>
                <BsPatchCheckFill className='mr-3' />Skill Test</Button>
            <Button>
                <BsFillFileEarmarkFill className='mr-3' />Internship</Button>

        </div>
    )
}

export default SideBar
