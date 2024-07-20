"use client"
import React, { useContext } from 'react'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import SkillTestMainContent from '@/components/SkillTestMainContent'
import Analysis from '@/components/Analysis'




const Dashboard = () => {
    return (

        <>

            <div className='flex flex-col w-screen h-screen'>
                <div>
                    <Header />
                </div>
                <div className='flex flex-row h-full'>
                    <div className='w-1/6 border-r-2 border-gray-600 p-2'>
                        <SideBar />
                    </div>
                    <div className='w-3/6 overflow-y-scroll border-r-2 border-gray-600 p-2 '>
                        <SkillTestMainContent />
                    </div>
                    <div className='w-2/6 p-2 overflow-y-scroll'>
                        <Analysis />
                    </div>
                </div>

            </div>






        </>

    )
}

export default Dashboard
