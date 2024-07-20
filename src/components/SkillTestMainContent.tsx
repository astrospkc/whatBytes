"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { SiHtml5 } from "react-icons/si";
import { BsFilterSquareFill } from "react-icons/bs";
import { BsTrophyFill } from "react-icons/bs";
import { BsCheckSquareFill } from "react-icons/bs";
import { Graph } from './Graph';
import SkillAnalysisDialogbox from './SkillAnalysisDialogbox';




const statistics = [

    {
        id: 1,
        icon: <BsTrophyFill />,
        value: 4,
        title: "YOUR RANK"

    },
    {
        id: 2,
        icon: <BsFilterSquareFill />,
        value: "90%",
        title: "PERCENTILE"

    },
    {
        id: 3,
        icon: <BsCheckSquareFill />,
        value: "12 / 15",
        title: "CORRECT ANSWERS"

    }
]






const SkillTestMainContent = ({ rank, percentile, score }) => {

    if (rank == undefined || percentile == undefined || score == undefined) {
        rank = 4;
        percentile = 90
        score = 12
    }
    return (
        // <div className={`page-content ${isModalOpen ? 'modal-open' : ''}`} >
        <div>
            <h1 className='text-xl mb-5 font-semibold'>Skill Test</h1>

            {/* html */}
            <div className='flex flex-col border-2 border-gray-200 rounded-2xl p-3'>
                <div className='flex flex-row gap-5'>
                    <div>
                        <span className='font-bold'>HTML</span>
                        <SiHtml5 className='text-5xl text-orange-500' />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Hyper Text Markup Language</h1>
                        <p className='text-gray-500'>
                            Questions:08 | Duration: 15 mins | Submitted on 5 June 2021
                        </p>
                    </div>
                    <SkillAnalysisDialogbox />



                </div>
            </div>

            {/* quick statistics */}
            <div className='my-3 border-2 border-gray-200 p-3 rounded-2xl'>
                <span className='font-semibold text-xl my-4'>Quick Statistics</span>
                <div className='flex flex-row gap-4 justify-evenly' >

                    <div className='flex flex-row items-center justify-center'>
                        <span className='bg-gray-200 rounded-full p-2 mx-2 '><BsTrophyFill /></span>
                        <div>
                            <span>{rank}</span>
                            <h1>Your Rank</h1>
                        </div>


                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <span className='bg-gray-200 rounded-full p-2 mx-2 '><BsFilterSquareFill /></span>
                        <div>
                            <span>{percentile}%</span>
                            <h1>Your Percentile</h1>
                        </div>


                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <span className='bg-gray-200 rounded-full p-2 mx-2 '><BsCheckSquareFill /></span>
                        <div>
                            <span>{score}/15</span>
                            <h1>Your Score</h1>
                        </div>


                    </div>
                    )

                </div>

                <div>


                </div>

            </div>

            {/* comaprison grapph */}

            <div className='border-2 border-gray-300 rounded-2xl p-2'>
                <span className='font-semibold text-xl mb-5'>Comparison Graph</span>
                <p className='mb-4'>You have {percentile}% percentile which is lower than the average percentile 72% of all the engineers who look this assessment</p>
                <Graph />

            </div>

        </div>
    )
}

export default SkillTestMainContent
